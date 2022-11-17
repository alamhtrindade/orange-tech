// Test Node
// console.log('Hello World!');


/*
let variavel = 10;

variavel = 20;

const pi = 3.14;

console.log(variavel*pi);
*/

/* primeiro desafio 
let total = 0;

const valorCombustivel = 5.79;
const valorConsumo = 10;
const distancia = 100;

total = (distancia/valorConsumo)*valorCombustivel;

console.log('O gasto com essa viagem vai ser '+total.toFixed(2)+' reais.');*/

/* segundo desafio
const valorGasolina = 5.79;
const valorEtanol = 4.99;
const tipoCombustivel = 'Etanol';

if(tipoCombustivel === 'Gasolina'){
    total = (distancia/valorConsumo)*valorGasolina;
    console.log('O gasto com essa viagem com Gasolina vai ser '+total.toFixed(2)+' reais.');
}else{
    total = (distancia/valorConsumo)*valorEtanol;
    console.log('O gasto com essa viagem com Etanol vai ser '+total.toFixed(2)+' reais.');
}*/


/* terceiro desafio
let n1 = 5;
let n2 = 3;
let n3 = 7;

let media = (n1+n2+n3)/3;
let situacao = '';

if(media < 5){
    situacao = 'Reprovado!';
} else if(media >= 5 && media <= 7){
    situacao = 'Recuperação!';
}else{
    situacao = 'Aprovado!';
}

console.log(situacao); */


/*
let peso = 75;
let altura = 1.65;
let imc = peso / Math.pow(altura,2);
let sit = '';

if( imc < 18.5 ){
    sit = 'Abaixo do Peso';
}else if( imc >= 18.5 && imc < 25 ){
    sit = 'Peso Normal';
} else if( imc >=25 && imc < 30 ){
    sit = 'Acima do Peso';
}else if( imc >= 30 && imc < 40){
    sit = 'Obeso';
}else{
    sit = 'Obesidade Grave';
}

console.log(sit); */

let valorProduto = 90;
let valorPago = 0;
let tipoPagamento = 'Dinheiro/PIX';

switch(tipoPagamento){
    case 'Debito':
        valorPago = valorProduto - valorProduto * 0.10;
    break;
    case 'Dinheiro/PIX':
        valorPago = valorProduto - valorProduto * 0.15;
    break;
    case '2x':
        valorPago = valorProduto;
    break
    default:
        valorPago = valorProduto * 1.10;
}

console.log('Valor do Final Conforme a Opcao de Pagamento: '+valorPago.toFixed(2));

const n = 10;
const nn = '10';
console.log(n === nn);