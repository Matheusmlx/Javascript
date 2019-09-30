//Destruturing Arrays
const [a] = [10, 12, 13];

console.log(a);

const [n1, , n3, , n5 = 1, n6 = 0] = [10, 7, 9, 8];

console.log(n1, n3, n5, n6);

const [nota1, [nota2, nota3]] = [8.0, [, 10]];

console.log(nota1, nota2, nota3);

const [, p2, [, , pt]] = [8.0, 7.0, [5.0, 6.0, 4.5]]; // é só dizer quais elemento você quer ignorando os outros

console.log(p2, pt);
