class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    setNome(nome){
        this.nome = nome;
    }
    setPeso(peso){
        this.peso = peso;
    }
    setAltura(altura){
        this.altura = altura;
    }
    getNome(){
        return this.nome;
    }
    getPeso(){
        return this.peso;
    }
    getAltura(){
        return this.altura;
    }

    calculaIMC(){
        let imc = this.peso / Math.pow(this.altura,2);
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
        return sit;
    }

}

let jose = new Pessoa('José',70,1.75);

console.log('Meu nome é '+jose.getNome()+', e meu IMC é '+jose.calculaIMC());

const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);