// vetor ou array
// for in lê os índices ou chaves do objeto

const pessoa = {
    nome: `Pedro`,
    sobrenome: `Henrique`,
    idade: `19`
}

const chave = `nome`
console.log(pessoa.nome)
console.log(pessoa[`nome`])
console.log(pessoa[chave])

for (let chaves in pessoa) {
    console.log(chaves)
}

/*
//                0       1       2
const frutas = [`pera`, `maçã`, `uva`];

for (let indice in frutas) { // lê indices
    console.log(frutas[indice])
}
*/

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
*/