const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Fernando',
    idade: 18,

    fala () {
        console.log(`A minha idade atual é ${this.idade} `)
    },

    incrementaIdade () {
      this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()



/*
function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}


const pessoa01 = criaPessoa('Luiz', 'Fernando', 18)
const pessoa02 = criaPessoa('Matheus', 'Mendes', 18)
const pessoa03 = criaPessoa('Raynara', 'Santos', 20)
const pessoa04 = criaPessoa('Sergio', 'Santos', 15)

console.log(pessoa01.nome)

*/