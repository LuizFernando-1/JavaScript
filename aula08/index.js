 /*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/ 

const nome = 'Luiz Fernando' 
const sobreNome = 'Araújo'
const idade = 17 
const peso = 60
const alturaEmM = 1.70
let imc
imc = peso / (alturaEmM ** 2)
let anoNascimento
anoNascimento = 2022 - idade


console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)

