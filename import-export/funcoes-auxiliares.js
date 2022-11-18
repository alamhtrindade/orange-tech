const entradas = [10, 75,50,10,98,23,17,500,100,98,2300];

let i=0;

function gets(){
    
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text){
    console.log(text);
}


module.exports = { gets, print };