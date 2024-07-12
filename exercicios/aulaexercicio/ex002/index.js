function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1)
        console.log(`Foi enviado`);
    };*/

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome} ${peso} ${altura}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();
