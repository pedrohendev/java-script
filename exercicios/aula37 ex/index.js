// Escreva uma função que recebe 2 números e retorne o maior deles

const max2 = (x, y) => (x > y ? x : y);
console.log(max2(10, 2));

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));

/* 
Escreva uma função que recebe um número e retorne o seguinte: 
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz 
Número é divisível por 3 e 5 = FizzBuzz 
Número  NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

function FizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return `FizzBuzz`;
    if (typeof n !== `number`) return NaN;
    if (n % 3 === 0) return `Fizz`;
    if (n % 5 === 0) return `Buzz`;
    return n
}

console.log(`a`, FizzBuzz(`a`))
for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}