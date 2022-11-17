class Pessoa{
    
    nome;
    notas = [];
    
    constructor(nome){
        this.nome = nome;
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }

    retornaMedia(){
        let soma = 0;
        for( let i = 0; i < this.notas.length; i ++){
            soma = soma + this.notas[i];
        }
        return soma / this.notas.length;
    }

    retornaSituacao(){
        let media = this.retornaMedia();
        let situacao = '';

        if(media < 5){
            situacao = 'Reprovado!';
        } else if(media >= 5 && media <= 7){
            situacao = 'Recuperação!';
        }else{
            situacao = 'Aprovado!';
        }

        return situacao;
    }
}


let alam = new Pessoa('Alam');
alam.notas.push(5);
alam.notas.push(7);
alam.notas.push(8);
alam.notas.push(2);
alam.notas.push(5);

let joao = new Pessoa('Joao');
joao.notas.push(8);
joao.notas.push(9);
joao.notas.push(8);
joao.notas.push(6);
joao.notas.push(5);

console.log('Aluno: '+alam.getNome());
console.log('Média: '+alam.retornaMedia());
console.log('Situação: '+alam.retornaSituacao());
console.log('');

console.log('Aluno: '+joao.getNome());
console.log('Média: '+joao.retornaMedia());
console.log('Situação: '+joao.retornaSituacao());
