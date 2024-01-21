// prototypal inheritance--------- we are inheriting properties of one object to another
let arr = [2, 3, 4, 3, 9];
let object = {
  name: "Radhe",
  age: "32",
  getIntro: function () {
    console.log(this.name + " " + this.age);
  },
};
let obj2 = {
  name: "aditya",
};
// should never call this, will cause performance issue
// obj2.__proto__ = object; //this is copying object to obj2 and giving access to its objects as well

// arr.__proto__ == Array.prototype == its an array
// arr.__proto__.__proto__ == object.prototype = its an object
// fun.prototype = fun.prototype.prototype = its an object

// this prototype will bind the this mybind method to each and every function of this file
Function.prototype.mybind = function () {
  console.log("abcde");
};
// mybind();
function fun() {
  //to achieve fun.mybind() - will work because of fun.prototype
}
function fun2() {
  //
}
