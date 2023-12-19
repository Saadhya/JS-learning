// ES6 CODE
let sum = (a) => (b) => b ? sum(a + b) : a;
//10+52, 62+3, 65+4, 69
console.log("Welcome to Programiz!");
console.log(sum(10)(52)(3)(4)());

// cors- cross origin resource sharing

// currying
// let multiply=(x, y)=>{
//     console.log(x*y);
// }

// let multiByTwo=multiply.bind(this,5);
// multiByTwo(2);

// currying by closures
let multiply = (x) => (y) => console.log(x * y);

let multiByTwo = multiply(2);
multiByTwo(5);
