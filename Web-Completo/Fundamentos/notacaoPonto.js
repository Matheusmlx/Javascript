console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'

//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome//o nome associado ao objto que foi criado
    this.exc = function () {
        console.log('Seu nome é ' + this.nome)
    }
}

const obj2 = new Obj('Cadeira'); // a palavra reservada new serve para criar uma nova copia de alguma coisa
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exc()