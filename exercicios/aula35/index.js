// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o indice ou chave (strings, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

//            01234...
const pessoa = {
    nome: `Pedro`,
    sobrenome: `Henrique`
};

for (let i in pessoa) {
    console.log(i, pessoa[i])
}

/*
for (let valor of nome) { // retorna o valor
  console.log(valor);
}

for (let i in nome) { // retorna o indice
  console.log(nome[i]);
}

for (let i = 0; i < nome.length; i++) { 
  console.log(nome[i]);
}

nome.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
*/