/// novo recusro do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);



const { nome: PrimeiroNome, idade: IdadeAtual } = pessoa;// Fazendo o destructuring e colocando em outra variavel
console.log(PrimeiroNome, IdadeAtual);

const { endereco } = pessoa

console.log(endereco.numero)

//caso nao exista esse valor que você queira recuperar 

const { sobreNome = 'Luiz', bemHumorada = true } = pessoa // utilizando o = para setar valores padrões
console.log(sobreNome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);