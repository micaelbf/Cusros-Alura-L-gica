//1-Criar uma função que exibe "Olá, mundo!" no console.
function exibirConsole(){
    console.log('Olá Mundo');
}

exibirConsole();

//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}

exibirNome('Miguel');

//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculaDobro(numero){
    return numero * 2;    
}

let resultado = calculaDobro('3');
console.log(resultado);

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1,numero2,numero3){
    return parseInt((numero1 + numero2 + numero3) / 3);
}

let resultadoMedia = media(20,20,20);
console.log(resultadoMedia);

//5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function econtraMaior(a,b){
    return a > b ? a : b;  
}

let maiorNumero = econtraMaior(10,100);
console.log(maiorNumero);

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(x){
    return x * x;
}

let resultadoMutiplicacao = multiplicaNumero(10);
console.log(resultadoMutiplicacao);