//estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(
  "Primeira Estrategia)",
  soma1(),
  soma1(3),
  soma1(1, 2, 3),
  soma1(10, 0, 2)
); //não serve para valores zero no parametro

//estrategia 2,3,4 para gerar valor padrão

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1; // in arguments significa: No argumento 1 existe o valor de b
  c = isNaN(c) ? 1 : c; // se o parametro c é um numero então adicione c a c ! esta é a mais segura
  return { a, b, c };
}
console.log("Segunda Estrategia)", soma2(0, 0, 0));

// valor padrão do es2015 mais utilizado e menos trabalhoso

function soma3(a = 4, b = 5, c = 3) {
  return a + b + c;
}
console.log("Terceira Estrategia)", soma3());

//Reduzindo ainda mais !!!!

soma4 = (a = 4, b = 1, c = 3) => a + b + c;

console.log("Quarta Estrategia)", soma4(2, 5, 6));
