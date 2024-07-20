// escreva uma função que recebe 2 números e retorne o maior deles

function maiorValor( x, y ) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const maior = maiorValor( 2, 4 )
console.log(maior)