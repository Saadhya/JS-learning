// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

// alert("Namaste Ji")
// functions & its components
function attachEventListeners(){
  let count=0;
  document.getElementById("clickMe").addEventListener("click", function x(){
    console.log("Button clicked!", ++count);
  })
}
attachEventListeners();

// function attachEventListeners{let count = 0;
// document.getElementById("clickMe").addEventListener("click", function () {
//   console.log("you", ++count);
// });}

// function statement
// function a() {
//   var t = 30;
//   console.log("a called");
//   return 90; //function expression
// }
// function expression
// var a = function () {
//   console.log("b called");
// }; // with this function on a function call, controller will take this function call
// a();

// closures test
// function outer() {
//   var a = 23, zz=34;
//   return function inner() {
//     console.log(a); //closure actually made here
//   };
// }
// var b = outer();
// b();

// CLOSURE-with settimeout()
// function y(){
//   for(let i =1; i<=5; i++){
//     setTimeout(() => {
//       console.log(i)
//     }, i*1000);
//   }
//   console.log("Namaste Javascript"); //1
// }
// y();
// function x() {
//   var a = 1;
//   setTimeout(() => {
//     console.log(a); //2
//   }, 3000);
//   setTimeout(() => {
//     console.log("Namaste Javascript"); //1
//   }, 1000);
//   setTimeout(() => {
//     console.log("Namaste Javascript after 6"); //3
//   }, 6000);
// }
// x();

// CLOSURE-1
// function z() {
//   var b=2014;
//   function x() {
//     var a = 20;
//     function y() {
//       a = 240;
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// CLOSURE-2
// while returning function as return y from x;
// var z= x();
// console.log( x() );
// z();

// BLOCK SCOPE | SHADOWING
// if(true) true;
// var b = 20;
// illegal shadowing
// let to var not possible but var to let possible and legal shadowing

//   let a = 250;
//   actions();
// function actions(){
//   var a = 30;
//   var b = 239;
//   const c = 23432;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

// let and const are hoisted
// let a = 10;
// console.log(a);
// var b = 100;
// console.log(b);
// // reinitialisation is also possible with var not let
// var b = 10052;

// about lexical enviornment
// var a;
// console.log(a)
// b();
// function b(){
//     a = 10;
// }

// // so shortest code is no code on the js page
// var a= 10;
// function b(){
//     var x =10;
// }
// console.log(window.a)
// console.log(a)
// // console.log(x)
// console.log(this.a)
