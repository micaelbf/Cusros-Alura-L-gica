alert ('Boas vindas ao jogo do número secreto');
let numeroSecreto  = 5;
let chute;
let contador = 1;

// equnato o chute não for igual ao numero secreto.
while (chute != numeroSecreto){

    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao numero secreto.
    if (chute == numeroSecreto) {
        alert(`Você acertou o número secreto é ${chute} com ${contador} tentativas.`);
    } else {
        if (chute > numeroSecreto){
            alert(`Número secreto é menor que ${chute}`);
        } else {
            alert(`Número secreto é maior que ${chute}`);
        }
        contador++;
    }
}








