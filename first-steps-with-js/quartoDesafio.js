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

console.log(sit);

