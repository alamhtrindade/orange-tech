class Carro{
    marca;
    cor;
    consumo;

    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    setMarca(marca){
        this.marca = marca;
    }
    setCor(cor){
        this.cor = cor;
    }
    setConsumo(consumo){
        this.consumo = consumo;
    }

    getMarca(){
        return this.marca;
    }
    getCor(){
        return this.cor;
    }
    getConsumo(){
        return this.consumo;
    }

    retornaGatos(km, valorCombustivel){
        return (km/this.consumo)*valorCombustivel;
    }

}

let golf = new Carro('Golf','Preto',9);
let uno = new Carro('Uno','Branco',16);

console.log('De Golf você vai gastar '+golf.retornaGatos(600,5.29).toFixed(2)+' Reais');
console.log('De Uno você vai gastar '+uno.retornaGatos(600,5.29).toFixed(2)+' Reais');