alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto  = parseInt(Math.random()*numeroMaximo) + 1;
let chute;
let contador = 1;

// equnato o chute não for igual ao numero secreto.
while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

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


// if (contador > 1) {
//     alert(`Você acertou, o número secreto é ${chute} com ${contador} tentativas.`);
// } else{
//     alert(`Você acertou, o número secreto é ${chute} com ${contador} tentativa.`);
// }
let palavraTentativa = contador > 1 ? 'tentativas.' : 'tentativa.';
alert(`Você acertou, o número secreto é ${chute} com ${contador} ${palavraTentativa}`);











