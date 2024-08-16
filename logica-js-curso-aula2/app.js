let numeroaleatorio = gerarNumeroAleatorio();
let tentativa =1;

function exibirTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTela('h1', 'Jogo do Número Secreto');
    exibirTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
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

