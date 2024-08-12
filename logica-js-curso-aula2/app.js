function exibirTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTela('h1', 'Jogo do Número Secreto');
exibirTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log('Verificar Chute');

}