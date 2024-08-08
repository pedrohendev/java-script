//             -5       -4      -3         -2         -1
//              0        1       2          3          4
const nomes = [`Maria`, `João`, `Eduardo`, `Gabriel`, `Júlia`];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// pop simulado em splice: 
//const removidos = nomes.splice(-1, 1); // retorna um array, max_value = valor maximo  

// shift simulado em splice
//const removidos = nomes.splice(0, 1)

//push simulado em splice 
//nomes.splice(nomes.length, 0, `Luiz`)

//unshift simulado em splice
nomes.splice(0, 0, `Luiz`, `Otávio`)

console.log(nomes)
//console.log(Number.MAX_VALUE)