let nome = 'Pedro'; // String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let idade; // Declarou a variável
idade = '18'; // Inicializando a variável
console.log(idade);
idade = '19'
console.log(idade);

// Não podemos criar variáveis com palavras  reservadas
// Variáveis precisam ter nomes significativos
let nomeCliente = 'João';
console.log(nomeCliente);

// Não pode começar o nome de uma variável com número
let no1me;

// Não podem conter espaços ou traços
// Utilizamos camelCase
let nomeCompleto = 'Pedro Henrique';
console.log(nomeCompleto)

// Case-sensitive
let nomePessoa = 'José';
let nomepessoa = 'Jamal'
console.log(nomePessoa, nomepessoa)

// Não podemos redeclarar variáveis com let
let nomeSer = 'Luiz';
nomeSer = 'Otávio';

console.log(nomeSer)
// Não utilize var, utilize let
