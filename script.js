function analisar() {
    // Captura o valor selecionado no menu suspenso
    const situacao = document.getElementById('situacao').value;
    const resultado = document.getElementById('resultado');
    const ajudaEspecifica = document.getElementById('ajuda-especifica');

    // Limpa os resultados anteriores antes de uma nova análise
    resultado.innerHTML = "";
    ajudaEspecifica.innerHTML = "";

    // Lógica de análise baseada nas diretrizes da DomusBot Tech e LGPD
    if (situacao === "") {
        resultado.innerHTML = "⚠️ Por favor, selecione uma situação para análise.";
        resultado.style.color = "orange";
        return;
    }

    resultado.style.color = "#2c3e50";

    switch (situacao) {
        case "bullying":
            resultado.innerHTML = "<strong>Análise DomusBot:</strong> Nossos robôs utilizam Visão Computacional para detectar comportamentos agressivos ou quedas. Sob a <em>Lei 14.811/2024</em>, garantimos que os registros sejam usados estritamente para a segurança do assistido, sem exposição pública.";
            ajudaEspecifica.innerHTML = "📌 <strong>Ação Recomendada:</strong> As provas coletadas localmente pelo robô podem ser exportadas via criptografia para fins judiciais.";
            break;

        case "privacidade":
            resultado.innerHTML = "<strong>Proteção de Intimidade:</strong> Em quartos ou banheiros, o sistema ativa o <em>Obscurecimento Dinâmico (Blurring)</em>. Conforme o Art. 5º, X da CF/88, o robô garante que nenhuma imagem de nudez seja processada ou transmitida.";
            ajudaEspecifica.innerHTML = "📌 <strong>Configuração:</strong> Você pode definir 'Zonas Cegas' permanentes através do painel de controle do administrador.";
            break;

        case "dados":
            resultado.innerHTML = "<strong>Tratamento LGPD (Art. 11):</strong> Dados biométricos e de rotina são processados via <em>Edge Computing</em>. Isso significa que a 'inteligência' fica no robô e os dados sensíveis nunca saem da sua residência.";
            ajudaEspecifica.innerHTML = "📌 <strong>Base Legal:</strong> O tratamento é fundamentado no consentimento específico e na proteção da vida do titular.";
            break;

        case "acesso":
            resultado.innerHTML = "<strong>Segurança Zero-Knowledge:</strong> A DomusBot utiliza criptografia assimétrica. Nem mesmo os nossos engenheiros possuem as chaves mestras para acessar o feed de vídeo do seu dispositivo.";
            ajudaEspecifica.innerHTML = "📌 <strong>Garantia Jurídica:</strong> Isso elimina o risco de vazamentos internos e garante a segregação de dados prevista no contrato societário da LTDA.";
            break;

        default:
            resultado.innerHTML = "Situação em análise pelos nossos protocolos de conformidade.";
    }
}
