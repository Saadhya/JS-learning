// attaching another js file or any file
function load(file) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", file);
  document.getElementsByTagName("head")[0].appendChild(src);
}
load("index.js");

// asynchronous js and event loop
console.log("start");
setTimeout(() => {
  console.log("inside timeout");
}, 5000);

fetch("https://www.google.com/maps").then(function cbf() {
  console.log("CB NETFLIX");
});
console.log("end")


// how function  works in js
// var c = 1;
// a();
// b();
// console.log(c);
// function a() {
//   var c = 10;
//   console.log(c);
// }
// function b() {
//   var c = 100;
//   console.log(c);
// }
// ---------------------------------------
// hoisting : calling var or function before the definition or declaration even
// var getName2 = () => {
//   console.log(x);
//   console.log("Namaste Javascript2 var");
// };

// var x = 7;
// getName();
// console.log(x);
// console.log(getName2);
// console.log(getName3); //working as variable
// getName3(); //here can work as function if defined before calling

// since x is updating after call, so it won't print the value 7
// in memory at first variables are defined as undefined by default in javascript
// var x = 7;

// function getName() {
//   console.log("Namaste Javascript");
// }
// var getName3 = function () {
//   console.log("Namaste Javascript3 var");
// };
