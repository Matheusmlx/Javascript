{
  {
    {
      var sera = "Será???";
    }
  }
}

//Escopo é o local onde a variavel é visivel.
console.log(sera);

function teste() {
  var local = 123; //Esta variavel será visivel apenas no escopo desta função
}
teste();

console.log(local);
