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

console.log(situacao);