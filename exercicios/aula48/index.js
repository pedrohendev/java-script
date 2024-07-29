// Funções auto envocadas = IIFE = Immediately ivoked function expression

(function(idade, peso, altura) {

    const sobrenome = `Henrique`
  
    function criaNome(nome){
        return nome + ` ` + sobrenome;
    }

    function falaNome() {
        console.log(criaNome(`Luiz`));
    }

    falaNome();
    console.log(idade, peso, altura)

})(19, `60kg`, 1.69 );

const nome = `Qualquer coisa`;
console.log(nome);


/*
function qualquerCoisa() {
    console.log(11123455)
};

qualquerCoisa();
*/
