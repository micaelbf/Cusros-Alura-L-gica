// //1-Criar uma função que exibe "Olá, mundo!" no console.
// function exibirConsole(){
//     console.log('Olá Mundo');
// }

// exibirConsole();

// //2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function exibirNome(nome){
//     console.log(`Olá, ${nome}`);
// }

// exibirNome('Miguel');

// //3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function calculaDobro(numero){
//     return numero * 2;    
// }

// let resultado = calculaDobro('3');
// console.log(resultado);

// //4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media(numero1,numero2,numero3){
//     return parseInt((numero1 + numero2 + numero3) / 3);
// }

// let resultadoMedia = media(20,20,20);
// console.log(resultadoMedia);

// //5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function econtraMaior(a,b){
//     return a > b ? a : b;  
// }

// let maiorNumero = econtraMaior(10,100);
// console.log(maiorNumero);

// //6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function multiplicaNumero(x){
//     return x * x;
// }

// let resultadoMutiplicacao = multiplicaNumero(10);
// console.log(resultadoMutiplicacao);

// //3.1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calculaIMC(altura,peso){
//     let imc = parseInt(peso / (altura * altura));
//     console.log(imc);
// }

// calculaIMC(1.70, 70);

//3.2-Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calculafatorial(numero){
//     if (numero < 0){

//         console.log('Fatorial não definido');
//     } else{
//         let resultado = 1;
//         for (let contador = 1; contador <= numero ; contador++){
//         resultado*= contador;
//         }
//     return(resultado);
//     }
// }

// calculafatorial(5);
// let paragrafo =document.querySelector('p','Teste');

//3.3-Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarReal(valorDolar) {
    let cotacaoAtual = 4.80;
    let valorReal = valorDolar * cotacaoAtual; 
    return valorReal.toFixed(2);
}

let valorReal = converterDolarReal(100);
console.log(valorReal);

//3.4-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaPerimetroSalaRetangular(altura,largura) {

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(area);
    console.log(perimetro);

}

calcularAreaPerimetroSalaRetangular(3,5)


//3.5-Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//3.7-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

