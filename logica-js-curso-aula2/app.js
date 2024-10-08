let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroaleatorio = gerarNumeroAleatorio();
let tentativa =1;

function exibirTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial(){
    exibirTela('h1', 'Jogo do Número Secreto');
    exibirTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = listaDeNumerosSorteados.length;

    if (quantidadeLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroaleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroaleatorio){
        exibirTela('h1','Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTela('p',mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');     
    } else {
        if (chute > numeroaleatorio) {
            exibirTela('p','O número é menor');
        } else {
            exibirTela('p','O número é maior');
        }
        tentativa++;
        limparCampo();
    }

}

exibirMensagemInicial();

