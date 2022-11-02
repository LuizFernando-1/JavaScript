let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varAtemp = varA
const varBtemp = varB
varA = varB
varB = varC
varC = varAtemp

console.log(varA, varB, varC)