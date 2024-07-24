// arguments que sustenta todos os argumentos enviados

/*
function funcao(a, b, c // parametros) {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7 // argumentos);
*/

/*
function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3);
*/

/*
function funcao(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcao(2, undefined, 20);
*/

/*
function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: `Pedro`, sobrenome: `Henrique`, idade: 18 }
funcao(obj);
*/

/*
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === `+`) acumulador += numero;
        if (operador === `-`) acumulador -= numero;
        if (operador === `*`) acumulador *= numero;
        if (operador === `/`) acumulador /= numero;
    }

    console.log(acumulador)
};

conta(`+`, 1, 20, 30, 40, 50);
*/

/*
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};

conta(`+`, 1, 20, 30, 40, 50);
*/

const conta = (...args) => {
    console.log(args);
};

conta(`+`, 1, 20, 30, 40, 50);
