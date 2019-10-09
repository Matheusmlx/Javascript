function Pessoa() {
  this.idade = 0; // criando um atributo

  const self = this;

  setInterval(
    function() {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/, //usando o .bind para apontar o this ao obj em questão
    1000
  );
}
new Pessoa();

//depende muito do contexto o this ele varia bastante
