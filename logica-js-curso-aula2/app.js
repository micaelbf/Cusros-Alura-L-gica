let numeroaleatorio = gerarNumeroAleatorio();

function exibirTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTela('h1', 'Jogo do Número Secreto');
exibirTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroaleatorio);

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 +1);
}