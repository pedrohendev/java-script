function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let rand = random(1, 50)
console.log(rand)


/*
const nome = `Pedro`;
let i = 0; 

while (i <= nome.length) {
    console.log(nome[i]);
    i++
}
*/
