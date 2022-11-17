function calculaIMC(peso, altura){
    return peso/ Math.pow(altura,2);
}

function retornaIMC(imc){
    let sit;
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
    return sit;
}

function main(){
    let imc = calculaIMC(75,1.75);
    console.log(retornaIMC(imc));
}

main();