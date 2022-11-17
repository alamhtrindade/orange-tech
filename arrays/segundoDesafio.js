let lista = [5,7,8,43,7,4,3,6,4,8,9,3,2,55,76];

for(let i = 0; i< lista.length; i++){
    if(lista[i]%2 === 0){
        console.log('O número ' + lista[i] + ' é par');
    }else{
        console.log('O número ' + lista[i] + ' é impar');
    }
}
