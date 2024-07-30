// Factory function (Função de fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(` `);
      this.nome = valor.shift();
      this.sobrenome = valor.join(` `);
    },

    fala(assunto = `Falando sobre JS`) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getter = obtém o valor
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa(`Pedro`, `Henrique`, 1.80, 40);
const p2 = criaPessoa(`João`, `Henrique`, 1.69, 60);
const p3 = criaPessoa(`Maria`, `Henrique`, 1.30, 30);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

/*
const p1 = criaPessoa(`Pedro`, `Henrique`, 1.69, 60);
p1.nomeCompleto = `Maria da Silva Santos`;
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
*/

/*
const p1 = criaPessoa(`Pedro`, `Henrique`, 1.69, 60);
console.log(p1.nome)
console.log(p1.sobrenome)
p1.imc = 29;
console.log(p1.imc)
*/

/*
const p1 = criaPessoa(`Pedro`, `Henrique`, 1.69, 60);
console.log(p1.imc())
const p2 = criaPessoa(`Maria`, `Joaquina`, 1.6, 42);
console.log(p1.fala(`falando sobre JavaScript`));
console.log(p2.fala(`falando sobre JS`));
console.log(p2.imc())
*/
