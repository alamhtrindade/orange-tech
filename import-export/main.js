const { gets,print } = require('./funcoes-auxiliares');

let qnt = gets();
let maior = gets();

for(let i = 1; i < qnt; i ++){
    let n = gets();
    if(n > maior){
        maior = n;
    }
}

print(maior);