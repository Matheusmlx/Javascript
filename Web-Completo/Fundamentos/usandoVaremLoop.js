//É possivel ver o valor de I pois o mesmo foi declaro usando var, que não possui um escopo de bloco.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i=`, i);
