const user = {
  name: "kanha",
  age: 20,
  address: "delhi",
  getUserDetails: function () {
    // console.log(this.name)
    return "name: " + this.name;
  },
};

// console.log(this);
console.log(user.getUserDetails());

// constructor in js
function User(username, age) {
  this.user = username;
  this.age = age;
//   we can also create functions inside a constructor
  this.greetings= function(){
    console.log("welcome "+this.user);
  }

  return this
}
const userOne = User("radha", 21);
const userTwo = new User("harekrishna", 25); //instead of above statement we use "new" keyword
// console.log(userOne.greetings()); //overridden the value of second variable
console.log(userTwo.constructor); 

// check instanceOf
