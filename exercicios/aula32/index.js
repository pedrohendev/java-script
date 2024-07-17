// atribuição via desestruturação

const pessoa = {
  nome: `Luiz`,
  sobrenome: `Mirando`,
  idade: 30,
  endereço: {
    rua: `Av Brasil`,
    numero: 320,
  },
};

const {
  endereço: { rua: r, numero },
} = pessoa;

const { nome, ...resto } = pessoa;
console.log(nome, resto, r, numero);
