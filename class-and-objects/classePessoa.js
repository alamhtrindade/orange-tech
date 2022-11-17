class Pessoa{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    
    describe(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }


}

function comparaPessoa(pessoa1, pessoa2){
    if( pessoa1.age > pessoa2.age ){
        console.log(`${pessoa1.name} é mais velho(a) que ${pessoa2.name}.`);
    }else if( pessoa1.age < pessoa2.age ){
        console.log(`${pessoa2.name} é mais velho(a) que ${pessoa1.name}.`);
    }else{
        console.log(`${pessoa2.name} e ${pessoa1.name} tem a mesma idade.`);
    }
}


const alam = new Pessoa('Alam H. Trindade',31);

const aline = new Pessoa('Aline F. Camilo',24);

comparaPessoa(alam,aline);