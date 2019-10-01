function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log(`Aprovado com ${nota}`);
  } else {
    if (nota == 5) {
      console.log(`Recuperação com ${nota}`);
    } else {
      console.log(`Reprovado com  com ${nota}`);
    }
  }
}

const nota = 5.0;
soBoaNoticia(nota);
