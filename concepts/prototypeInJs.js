// FIRST PART
function createUser(username, score) {
  this.username = username;
  this.score = score;
}
// we are injecting a function to the above func using prototype in js
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

// so while calling insider function we need "new" keyword otherwise jsengine will throw an error saying
// its undefined by default inside createUser function
const chai = new createUser("chai", 25);
const coffee = createUser("coffee", 215);
// chai.printMe()
// console.log(coffee);

// SECOND PART
// let myName = "hitesh   ";
// let myChannel = "codde    ";
// console.log(myName.trim())
// instead of using trim(), we will use myName.truelength

// with story explanation
let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log("spider power is " + this.spiderman);
  },
};

Object.prototype.kanha = function () {
  console.log("kanha is present everywhere");
};
Array.prototype.heyKanha = function () {
  console.log("kanha says helo");
};
// myHeros.kanha();
// myHeros.heyKanha();
// heroPower.heyKanha()//doesn't have power to access function

//prototypal inheritance
const User = {
    name:"krishna",
    email:"k@co.in"
}
const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const taSupport = {
  makeAssignment: "js ass",
  fulltime: true,
  __proto__: teachingSupport,
};
// using __proto__ we can give access to any function or object
teacher.__proto__ = User; //old syntax

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher); //from and to property

// solution using __proto__
let myName = "radhakishan   ";
let myChannel = "codde    ";

// we are creating a true length function to apply to all as property
String.prototype.trueLength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log("true length is: "+this.trim().length)
}
myName.trueLength()

"saadhya".trueLength()
"rajeshwar".trueLength()