// hof= fn which takes another func as an argument called hof
// callback func - fn which gets passed as an arguement to another func

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  // to make value absolute even if its -ve
  return Math.abs(a - b);
};

// hof
const calculator = (n1, n2, operator) => {
  return operator(n1, n2);
};

console.log(calculator(5, 6, add));
console.log(calculator(5, 6, subtract));
