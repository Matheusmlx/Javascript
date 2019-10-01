//in functions normal the this can change according to the context
//in functions arrow the this can't change according to the context

//### this and function bind
const pessoa = {
  saudacao: "Bom Dia",
  falar() {
    console.log(this.saudacao); // acessando um atributo de um obj
  }
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas : funcioanl e OO

const falarDePessoa = pessoa.falar.bind(pessoa); //bind serve para unir o this com o obj que você mandou no bind

falarDePessoa();
