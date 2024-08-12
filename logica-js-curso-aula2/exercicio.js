let titulo = document.querySelector('h1');
titulo.innerHTML = 'Teste de Alterção com JS';

function verificarChute(){
    console.log('Verficiar chute');
}

function exibirMensagem(){
    alert ('Eu amo JS');
}

function nomeCidade(){
    cidade = prompt('Digite o nome de uma cidade');
    alert (`Estive em ${cidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}