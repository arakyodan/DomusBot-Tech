function analisar() {
    const situacao = document.getElementById('situacao').value;
    const resultado = document.getElementById('resultado');
    
    if (situacao === "bullying") {
        resultado.innerHTML = "<strong>Análise:</strong> Conforme o Art. 146-A do CP, isso pode ser enquadrado como intimidação sistemática virtual.";
    } 
    // ... restante do seu código
}
