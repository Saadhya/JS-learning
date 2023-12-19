// use of map functions
const users = [
  { name: "akshay", age: 10 },
  { name: "neeraj", age: 20 },
  { name: "vasu", age: 20 },
  { name: "shiv", age: 40 },
];

// const output = users.map((x) => {
//   console.log(x.name + " " + x.age);
// });
// const out = users.map((x) => x.name + " " + x.age);
// console.log(out);

// leverage the reduce() when you need to iterate over an array and take out single value out of it
const out = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(out);

// use of filter function and map chaining
const result = users.filter((x) => x.age < 30).map((y) => y.name);
console.log(result);

// doing above with reduce only
const res = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.name);
  }
  return acc;
}, []);
console.log(res);
