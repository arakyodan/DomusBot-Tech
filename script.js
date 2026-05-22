// 1. Lógica para trocar de página no menu (Navegação SPA) com Feedback Visual
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1a. Remove a classe de destaque de todos os links do menu
        document.querySelectorAll('nav a').forEach(navLink => {
            navLink.classList.remove('active-menu');
        });
        
        // 1b. Adiciona o destaque apenas no link clicado
        this.classList.add('active-menu');
        
        // Remove a classe 'active' de todas as seções
        document.querySelectorAll('.page-content').forEach(section => {
            section.classList.remove('active');
        });

        // Pega o ID da seção pelo href (ex: #tecnologia) e ativa a seção correspondente
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.classList.add('active');
            // Rola a página para o topo ao trocar de seção
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Rolo suave elegante
            });
        }
    });
});

// 2. Função do Simulador Jurídico da DomusBot Otimizada
function analisar() {
    const situacao = document.getElementById('situacao').value;
    const resultado = document.getElementById('resultado');
    const ajudaEspecifica = document.getElementById('ajuda-especifica');

    // Limpa os resultados anteriores
    resultado.innerHTML = "";
    ajudaEspecifica.innerHTML = "";

    if (situacao === "") {
        resultado.innerHTML = "⚠️ Por favor, selecione uma situação para análise.";
        resultado.style.color = "#e67e22"; // Laranja de alerta visível no tema dark
        return;
    }

    // Cor verde neon/tecnológica para quando o protocolo estiver ativo e seguro
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

        default:
            resultado.innerHTML = "Protocolo de conformidade em análise.";
            resultado.style.color = "#95a5a6";
    }
}
