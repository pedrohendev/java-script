// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // boolean = true or false (lógico)

console.log(typeof nome, nome);

const a = [1, 2]
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
const d = c;

console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2