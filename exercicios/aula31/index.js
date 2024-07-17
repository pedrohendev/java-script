// atribuição via desestruturação 

const numeros = [
    //     0
    //   0 1 2
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    
const [lista1, lista2, lista3] = numeros
console.log(lista3[2])

/*
const numeros = [
//     0
//   0 1 2
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(numeros[1][2]);
*/

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, ,tres, ,cinco, , sete ] = numeros;
console.log(um, tres, cinco);
*/

/*
// ...rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
*/

/*let a = `A`; // B
let b = `B`; // C
let c = `C`; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/
