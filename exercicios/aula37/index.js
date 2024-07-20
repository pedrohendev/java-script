const numeros = [1,2,3,4,5,6,7,8,9];

// continue = continua para proxima interação
// break = sai do laço 

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2 ) {
        console.log(`Pulei o número 2`);
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(`7 encontrado, saindo...`);
        i++;
        break;
    }

    i++;
    console.log(numero);
} while ( i < numeros.length ) 

/*
let i = 0;
while ( i < numeros.length ) {
    let numero = numeros[i];

    if (numero === 2 ) {
        console.log(`Pulei o número 2`);
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(`7 encontrado, saindo...`);
        i++;
        break;
    }

    i++;
    console.log(numero);
}
*/

/*
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]

    if (numero === 2 ) {
        console.log(`Pulei o número 2`)
        continue;
    }

    if (numero === 7) {
        console.log(`7 encontrado, saindo...`)
        break;
    }

    console.log(numero);
}
*/

/*
for (let i in numeros) {
    let numero = numeros[i]

    if (numero === 2 ) {
        console.log(`Pulei o número 2`)
        continue;
    }

    if (numero === 7) {
        console.log(`7 encontrado, saindo...`)
        break;
    }

    console.log(numero);
}
*/

/*
for (let numero of numeros) {
    if (numero === 2 ) {
        console.log(`Pulei o número 2`)
        continue;
    }

    if (numero === 7) {
        console.log(`7 encontrado, saindo...`)
        break;
    }

    console.log(numero);
}
*/