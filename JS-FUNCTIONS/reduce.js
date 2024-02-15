let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// here accumulator = initial val
// curr is each element -
// arr.reduce() return the single value
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum);
let multiply = arr.reduce((acc, curr) => {
  return acc * curr;
});

// use initial val = like previous month price and update it with the current month price array
let add = arr.reduce((acc, curr) => {
  // debugger;
  return acc + curr;
}, 50);

let average = arr.reduce((acc, curr, index, array) => {
//   debugger;
  let avg = (acc += curr);
  if (index === array.length - 1) return avg / array.length;

  return avg;
});
console.log(average);

document.getElementById("arr").innerHTML = arr;
document.getElementById("sum").innerHTML = add;
document.getElementById("average").innerHTML = average;
document.getElementById("multiply").innerHTML = multiply;
