// 1. Lógica para trocar de página no menu (Navegação SPA)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
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
            window.scrollTo(0, 0);
        }
    });
});

// 2. Função do Simulador Jurídico da DomusBot
function analisar() {
    const situacao = document.getElementById('situacao').value;
    const resultado = document.getElementById('resultado');
    const ajudaEspecifica = document.getElementById('ajuda-especifica');

    // Limpa os resultados anteriores
    resultado.innerHTML = "";
    ajudaEspecifica.innerHTML = "";

    if (situacao === "") {
        resultado.innerHTML = "⚠️ Por favor, selecione uma situação para análise.";
        resultado.style.color = "orange";
        return;
    }

    resultado.style.color = "#2c3e50";

    switch (situacao) {
        case "privacidade":
            resultado.innerHTML = "<strong>Proteção de Intimidade:</strong> Em áreas sensíveis, o sistema ativa o <em>Obscurecimento Dinâmico (Blurring)</em>. Conforme o Art. 5º, X da CF/88, garantimos que imagens íntimas não sejam processadas ou transmitidas.";
            ajudaEspecifica.innerHTML = "📌 <strong>Diferencial DomusBot:</strong> O processamento ocorre localmente via Edge Computing.";
            break;

        case "dados":
            resultado.innerHTML = "<strong>Tratamento LGPD (Art. 11):</strong> Dados biométricos para reconhecimento de PcDs são tratados mediante consentimento específico e fundamentados na proteção da vida.";
            ajudaEspecifica.innerHTML = "📌 <strong>Base Legal:</strong> Armazenamento criptografado no próprio hardware do robô.";
            break;

        case "acesso":
            resultado.innerHTML = "<strong>Segurança Zero-Knowledge:</strong> Utilizamos criptografia assimétrica onde nem os engenheiros da DomusBot possuem as chaves mestras de acesso ao vídeo.";
            ajudaEspecifica.innerHTML = "📌 <strong>Garantia Jurídica:</strong> Mitigação de responsabilidade civil para a Sociedade Limitada (LTDA).";
            break;

        default:
            resultado.innerHTML = "Protocolo de conformidade em análise.";
    }
}
