//Operadores relacionais

const a = 4;
const b = 3;
const c = 4;
const d = "3";
console.log("01)", a == b);
// o perador == verifica se o valor dos valores são iguais
console.log("02)", a == c);

console.log("03)", b == d);
// o operador === verifica se o tipo dos valores são iguais estritamente igual
console.log("04)", b === d);

console.log("05)", "3" != 3);

console.log("06)", "3" !== 3);

console.log("07)", "4" <= 4);

const d1 = new Date(0);
const d2 = new Date(0);

console.log("08)", d1 === d2);

console.log("09)", d1.getTime === d2.getTime);

console.log("10)", undefined == null);

console.log("11)", undefined === null);
