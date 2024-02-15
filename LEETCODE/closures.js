// Here is an example of how to return 2 functions inside a variable in JavaScript:
const myFunctions = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  return { add, subtract };
};

const { add, subtract } = myFunctions();

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); //

//   another way of doing above
// const myFunctions = () => [
//     (a, b) => a + b,
//     (a, b) => a - b,
//   ];

//   const [add, subtract] = myFunctions();

//   No, but you could return an array containing your values:

function getValues() {
  return [getFirstValue(), getSecondValue()];
}
// Then you can access them like so:
const [first, second] = getValues();
// This is called destructuring assignment and is supported by every major JS environment. It's equivalent to the following:
const values = getValues();
// const first = values[0]
// const second = values[1]
