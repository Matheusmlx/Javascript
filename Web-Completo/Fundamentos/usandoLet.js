let numero = 1; //Variaveis definidads com o valor var tem escopo global e de função
{
  let numero = 2; //Variaveis definidads com o let var tem escopo global,bloco e função
  console.log(`dentro=${numero}`);
}

console.log(`numero=${numero}`);

let numero2 = 3;

{
  {
    {
      let numero2 = 5;
      {
        // let numero2 = 4;
        console.log(`numero=${numero2}`);
      }
    }
  }
}
console.log(`numero=${numero2}`);
