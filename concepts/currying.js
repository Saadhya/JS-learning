// this whole concept depends on function closure

// normal function call syntax
// function sums(x, y) {
//   return x + y;
// }
// console.log(sums(4, 6));

// in function currying, it should be single arguement only for each nested function otherwise its partial application
// function currying , calling syntax according to its nested function
// function sum(x) {
//   // inner function will remember its lexical scope-
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

// same using arrow function
const sum = (x) => (y) => (z) => x + y + z;

// console.log(sum(2)(18)(5));

// // // or this way we can call it
// const secondCall = sum(5)(6);
// console.log(secondCall(7));

const user = {
  fname: "nisha",
  lname: "singhla",
  city: "Delhi",
};
// basic function call without currying
// const userDetail = (data, key) => data[key];

// console.log(userDetail(user, 'fname'));
// console.log(userDetail(user, 'lname'));
// console.log(userDetail(user, 'city'));

// with currying concept
const getDetails = (data) => (key) => data[key];
const userDetail = getDetails(user);
console.log(userDetail("fname"));
console.log(userDetail("lname"));

// function currying can be used in dom manipulation
// function updateNode(id){
//     return function(content){
//         document.querySelector(`#${id}`).textContent=content;
//         return content
//     }
// } 

// using arrow function
const updateNode=id=> content=>document.querySelector(`#${id}`).textContent=content;
const updateHeader = updateNode('header');
console.log(updateHeader('helo radhe'));
// updateHeader('Hello radhe')
updateHeader('Hello sneha')

