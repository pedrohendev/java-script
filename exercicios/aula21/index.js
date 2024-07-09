/*
Primitivos (imutaveis) = string, number, boolean, undefined, null(bigint, symbol) - valores copiados

Referencia (mutaveis) = array, object, function - passados por referencia 
*/

const a = {
    nome: `luiz`,
    sobrenome: `otavio`
}

const b = {...a}
// const b = a

a.nome = `joao`
console.log(a)
console.log(b)


/*let a = [1,2,3]
let b = [...a] // o valor de a foi puxado para o b
let c = b

console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push(`luiz`)
console.log(c)*/


/*let a = [1,2,3]
let b = a
console.log(a, b)

a.push(4)
console.log(a)

b.pop()
console.log(a, b)*/


/*= let a `A`
let b = a // copia
console.log(a, b)

a = `Outra coisa`
console.log(a, b)*/


/*//          0123
let nome = `luiz`
//nome = `otavio` // troca, não altera
nome[0] = `R` // não altera
console.log(nome[0], nome)*/