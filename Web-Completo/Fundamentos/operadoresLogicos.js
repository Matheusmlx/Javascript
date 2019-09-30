const a = 2;
const b = 3;
const c = 2;
const d = 3;

console.log("A)", a > b);

console.log("B)", a > b || a == c); // F OR V  == V

console.log("C)", a != b || a == c); // F OR V  == V

console.log("D)", a == b || a != c); // F OR V  == V

console.log("E)", a == b && a != c); //F AND V == F
