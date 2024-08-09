alert ('Boas vindas ao jogo do número secreto');
let vezes = 10;
let numeroSecreto  = parseInt(Math.random()*vezes) + 1;
let chute;
let contador = 1;

// equnato o chute não for igual ao numero secreto.
while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${vezes}`);

    // se chute for igual ao numero secreto.
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`Número secreto é menor que ${chute}`);
        } else {
            alert(`Número secreto é maior que ${chute}`);

        }
        contador++;
    }
}

let palavraTentativa = contador > 1 ? 'tentativas.' : 'tentativa.';
alert(`Você acertou, o número secreto é ${chute} com ${contador} ${palavraTentativa}`);

// if (contador > 1) {
//     alert(`Você acertou, o número secreto é ${chute} com ${contador} tentativas.`);
// } else{
//     alert(`Você acertou, o número secreto é ${chute} com ${contador} tentativa.`);
// }









