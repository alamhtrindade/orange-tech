function retornaMaioridade(idade){
    let sit = '';

    if(idade >= 18){
        sit = 'Maior de Idade';
    }else{
        sit = 'Menor de Idade';
    }
    return sit;
}

function main(){
    console.log(retornaMaioridade(17));
}

main();