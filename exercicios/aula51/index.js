// função construtora -> objetos
// função fabrica -> objetos

// construtora -> Pessoa (new)

class Pessoa {
  constructor(nome, sobrenome) {
    // atributos ou metodos privados
    const ID = 123456;

    const metodoInterno = function () {

    };

    this.nome = nome; // pessoa.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function () {
      console.log(this.nome + `: Sou um método`);
    };
  }
}

const p1 = new Pessoa(`Pedro`, `Henrique`);
const p2 = new Pessoa(`Maria`, `Oliveira`);

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();


