// 1. Lógica de Navegação SPA (Troca de Abas) com Feedback Visual
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove destaque visual de todos os links do menu
        document.querySelectorAll('nav a').forEach(navLink => {
            navLink.classList.remove('active-menu');
        });
        
        // Adiciona destaque ao menu clicado
        this.classList.add('active-menu');
        
        // Oculta todas as seções
        document.querySelectorAll('.page-content').forEach(section => {
            section.classList.remove('active');
        });

        // Captura o ID do destino e ativa a aba correspondente
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Banco de Dados dos Robôs (Especificações Técnicas e Detalhes)
const dadosRobos = {
    DomusGuard: {
        titulo: "DomusGuard (Vigia & Guia)",
        descricao: "Plataforma robótica quadrúpede autônoma voltada para a segurança perimetral e orientação espacial de deficientes visuais.",
        imagem: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
        especificacoes: [
            "Autonomia de Bateria: Até 8 horas de operação contínua.",
            "Sensores: Scanner LiDAR 360°, Câmeras Estereoscópicas de Profundidade.",
            "Conectividade: Módulo de Contingência Local Offline (Edge Computing).",
            "Chassi: Alumínio aeronáutico com vedação IP65 (resistente a chuva)."
        ],
        detalhes: "O DomusGuard realiza rondas preventivas na residência, detectando invasões ou anormalidades. Para pessoas com deficiência visual, atua como um guia ativo que reconhece obstáculos flutuantes, degraus e portas abertas, guiando o morador com avisos de voz em tempo real e de forma 100% privada."
    },
    DomusButler: {
        titulo: "DomusButler (Doméstico)",
        descricao: "Unidade assistiva bípede/de rodas projetada para mitigação de barreiras físicas e auxílio operacional no lar para idosos e PcDs.",
        imagem: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=500&q=80",
        especificacoes: [
            "Capacidade de Carga: Braço mecânico articulado para até 5kg.",
            "Navegação: SLAM Visual de alta precisão para ambientes dinâmicos.",
            "Interface: Reconhecimento de voz natural processado localmente.",
            "Segurança: Sensores de pressão pneumática antiqueda e antiesmagamento."
        ],
        detalhes: "Focado na automação de tarefas cotidianas leves, o DomusButler é capaz de buscar objetos (como copos de água ou remédios), organizar cômodos, emitir alertas rigorosos de horários de medicação e fornecer suporte de equilíbrio físico leve para levantar ou sentar com total estabilidade."
    },
    DomusBuddy: {
        titulo: "DomusBuddy (Companhia)",
        descricao: "Dispositivo robótico antropomórfico focado em suporte socioemocional, monitoramento de saúde mental e combate ao isolamento social.",
        imagem: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=500&q=80",
        especificacoes: [
            "Processamento: Rede neural local voltada para análise de microexpressões.",
            "Tela Interativa: Painel AMOLED de 10 polegadas para chamadas médicas.",
            "Monitoramento: Integração sem fio com smartwatches e sensores de sinais vitais.",
            "Privacidade: Protocolo Blurring Dinâmico nativo em áreas íntimas."
        ],
        detalhes: "O DomusBuddy interage por meio de inteligência conversacional avançada, oferecendo estímulos cognitivos através de jogos de memória para idosos. Ele também atua como um supervisor de segurança médica de emergência: caso detecte batimentos cardíacos anômalos ou ausência de resposta por muito tempo, aciona a central de socorro sem expor o vídeo do lar."
    }
};

// 3. Funções de Controle do Modal (Janela Flutuante)
function abrirDetalhes(idRobo) {
    const robo = dadosRobos[idRobo];
    if (!robo) return;

    document.getElementById('modal-titulo').innerText = robo.titulo;
    document.getElementById('modal-descricao').innerText = robo.descricao;
    document.getElementById('modal-img').src = robo.imagem;
    document.getElementById('modal-detalhes-func').innerText = robo.detalhes;

    const listaEsp = document.getElementById('modal-especificacoes');
    listaEsp.innerHTML = ""; 
    robo.especificacoes.forEach(esp => {
        let li = document.createElement('li');
        li.innerText = esp;
        listaEsp.appendChild(li);
    });

    document.getElementById('modal-btn-comprar').onclick = function() {
        fecharModal();
        selecionarRobo(robo.titulo); 
    };

    document.getElementById('modal-detalhes').style.display = "flex";
}

function fecharModal() {
    document.getElementById('modal-detalhes').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-detalhes');
    if (event.target === modal) {
        fecharModal();
    }
};

// 4. Fluxo de Seleção e Carregamento do Robô no Formulário
function selecionarRobo(nomeRobo) {
    document.getElementById('robo-selecionado').value = nomeRobo;
    
    document.querySelectorAll('.page-content').forEach(section => section.classList.remove('active'));
    document.getElementById('compra').classList.add('active');
    
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active-menu'));
    document.querySelector('nav a[href="#compra"]').classList.add('active-menu');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Simulação de Fechamento de Contrato de Adesão (Fase 3)
function finalizarPedido(event) {
    event.preventDefault();
    const status = document.getElementById('status-compra');
    const robo = document.getElementById('robo-selecionado').value || "Não selecionado";
    
    status.style.display = "block";
    status.style.background = "#2ecc71";
    status.style.color = "white";
    status.innerHTML = `✔️ Termo Pré-Aprovado!<br><small>Contrato de Prestação de Serviços com a DomusBot Tech Ltda emitido com sucesso para o modelo ${robo}. Verifique seu e-mail institucional.</small>`;
}

// 6. Simulador de Proteção Jurídica e LGPD
function analisar() {
    const situacao = document.getElementById('situacao').value;
    const resultado = document.getElementById('resultado');
    const ajudaEspecifica = document.getElementById('ajuda-especifica');

    resultado.innerHTML = "";
    ajudaEspecifica.innerHTML = "";

    if (situacao === "") {
        resultado.innerHTML = "⚠️ Por favor, selecione uma situação para análise.";
        resultado.style.color = "#e67e22";
        return;
    }

    resultado.style.color = "#2ecc71"; 

    switch (situacao) {
        case "privacidade":
            resultado.innerHTML = "<strong>Proteção de Intimidade:</strong> Em áreas sensíveis, o sistema ativa o <em>Obscurecimento Dinâmico (Blurring)</em>. Conforme o Art. 5º, X da CF/88, garantimos que imagens íntimas não sejam processadas ou transmitidas.";
            ajudaEspecifica.innerHTML = "📌 <strong>Diferencial DomusBot:</strong> O processamento ocorre localmente via Edge Computing, sem tráfego de imagens brutas em servidores externos.";
            break;

        case "dados":
            resultado.innerHTML = "<strong>Tratamento LGPD (Art. 11):</strong> Dados biométricos para reconhecimento de PcDs são tratados mediante consentimento específico e fundamentados na proteção da vida e tutela da saúde.";
            ajudaEspecifica.innerHTML = "📌 <strong>Base Legal:</strong> Armazenamento criptografado no próprio hardware do robô com hashing irreversível.";
            break;

        case "acesso":
            resultado.innerHTML = "<strong>Segurança Zero-Knowledge:</strong> Utilizamos criptografia assimétrica onde nem os engenheiros da DomusBot possuem as chaves mestras de acesso ao vídeo.";
            ajudaEspecifica.innerHTML = "📌 <strong>Garantia Jurídica:</strong> Mitigação de responsabilidade civil para a Sociedade Limitada (LTDA) em caso de tentativas invasivas externas.";
            break;

        case "descarte":
            resultado.innerHTML = "<strong>Direito ao Esquecimento (Art. 18, IV):</strong> Em caso de venda do hardware ou rescisão contratual, o usuário aciona o 'Purge de Fábrica'.";
            ajudaEspecifica.innerHTML = "📌 <strong>Garantia Jurídica:</strong> Eliminação total de dados pessoais e biometria, impossibilitando a recuperação por terceiros.";
            break;

        case "seguranca":
            resultado.innerHTML = "<strong>Princípio da Segurança (Art. 6º, VII):</strong> Implementação de defesas ativas e firewalls locais no sistema operacional do robô.";
            ajudaEspecifica.innerHTML = "📌 <strong>Mitigação de Riscos:</strong> Auditorias periódicas de código para evitar vazamentos de informação ou invasões de privacidade.";
            break;

        default:
            resultado.innerHTML = "Protocolo de conformidade em análise.";
            resultado.style.color = "#95a5a6";
    }
}
