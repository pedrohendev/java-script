const numero  = Number(prompt(`Digite um número!`))
const num = document.getElementById(`numt`)
const tex = document.getElementById(`text`)

num.innerHTML = numero

tex.innerHTML = `   `
tex.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
tex.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
tex.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
tex.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
tex.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
tex.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

