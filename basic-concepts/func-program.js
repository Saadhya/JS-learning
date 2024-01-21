const radius = [1, 3, 5, 8];

// functions are first class citizens in javascript.

// map, filter, reduce are actually the high-order function
// ------------------map functions is equivalent to array logic functions--------------
const arr = [5, 1, 3, 2, 6];
// const output = arr.map(double);

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

// console.log(arr.map(binary));
// console.log(arr.map((x) => x.toString(2)));
// both above function call is giving same output

// ----------------------filter function actually filters the value----------------
const out = arr.filter((x) => x < 3);
console.log(out);

// reduce function doesn't reduce anything, it works like so:-
// function findMax(arr) {
//   let max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }//1
// console.log(findMax(arr));

const max = arr.reduce((acc, curr) => {
  if (curr > acc) acc = curr;
  return acc;
}, 0); //2
console.log(max);
// both above function is giving same output

// createing a generic function for logic
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// this line is having higher-order-function
// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
// console.log(radius.map(area));
// console.log(radius.calculate(area));
// both above function is giving same output

// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
