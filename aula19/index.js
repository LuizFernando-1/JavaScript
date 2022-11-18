/*
Primitivos (imutáveis)  - string, number, boolean, undefined, null (bigint, symbol) - Valores copiado


Referência (mutável) - Array, Object, Function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Fernando'
}

const b = {...a}

a.nome = 'João'
console.log(a)
console.log(b)


/*
let a = [1, 2, 3]
let b = [...a]
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop(4)
console.log(a, b)

a.push('Luiz')
console.log(a, c)
*/