const pessoa1 = {
    nome: `luiz`,
    sobrenome: `miranda`,
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
        /*console.log(`${this.nome} ${this.sobrenome} está falando oi...`);*/
    }, 

    incrementaIdade() {
        ++this.idade;
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

//function criaPessoa(nome, sobrenome, idade /*parametro*/) {
//    return {nome, sobrenome, idade}
//}

//const pessoa1 = criaPessoa(`luiz`, `miranda`, 25 /*argumento*/)
//const pessoa2 = criaPessoa(`maria`, `oliveira`, 32 /*argumento*/)
//const pessoa3 = criaPessoa(`joão`, `moreira`, 55 /*argumento*/)
//const pessoa4 = criaPessoa(`junior`, `lara`, 44 /*argumento*/)
//const pessoa5 = criaPessoa(`jean`, `otavio`, 69 /*argumento*/)
//console.log(pessoa1.nome, pessoa2.nome )


/*const pessoa1 = { // objeto = {}, array = []
    nome: `luiz`, 
    sobrenome: `miranda`,
    idade: 25,
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)*/

/*const nome01 = `luiz`
const sobrenome01 = `miranda`
const idade01 = 25

const nome02 = `maria`
const sobrenome02 = `oliveira`
const idade02 = 55*/
