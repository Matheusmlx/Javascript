//A variavel var só tem dois escopos
var numero = 1;
{
  //Não existe escopo de bloco para o var, apenas em função existe.
  var numero = 2;
  console.log(`numero=${numero}`);
}
console.log(`numero=${numero}`);
