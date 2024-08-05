// Valor por referência

//              0          1        2        3          4
//const nomes = [`Eduardo`, `Maria`, `Joana`, `Wallace`, `Rosana`];

// Strings, Objetos, Funções, Números

//const nomes = new Array [`Eduardo`, `Maria`, `Joana`]

//const removido = nomes.pop(); // Remove no final
//const removido = nomes.shift(); // Remove no inicio
//nomes.push(`João`); // Adiciona
//nomes.unshift(`João`); // Adiciona no começo
//nomes.unshift(`Wallace`);
//const novo = nomes.slice(0, -2); // Reparte
//console.log(novo);

//console.log(nomes.length)

//const novo = nomes;
//nomes[2] = `João`;
//delete nomes[2];
//novo.pop();
//console.log(nomes);

//const nome = `Pedro Henrique da Silva`;
//const nomes = nome.split(` `); // Separa as strings
const nomes = [`Pedro`, `Henrique`, `Silva`];
const nome = nomes.join(` `); // Une as strings
console.log(nome);
