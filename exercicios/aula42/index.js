// Declaração de função (Function hoisting)

falaOi();

function falaOi() {
    console.log(`Oi!`);
}

// Firt-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log(`Sou um dado.`);
};

function executaFunção(função) {
    console.log(`Vou executar sua função abaixo:`)
    função();
}

executaFunção(souUmDado);

// Arrow function 

const funçãoArrow = () => {
    console.log(`Sou uma arrow function.`);
};

funçãoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log(`Estou falando...`);
    }
};

obj.falar();