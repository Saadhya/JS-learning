// All these functions are same- called as function borrowing
// call()- used to invoke a function directly from an object by passing in the reference which points to this variable inside the method.
// apply()- same as call(), but it takes second arg as array of paramenter to be passed into the func
// bind()- can't be called directly and creates the copy of same method, which can be called later
let hisinfo = {
  firstName: "Radhe",
  lastName: "krishna",
  age: "32",
};

let getIntro = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName,
    "from",
    hometown,
    ",",
    state
  );
};
// Calls a method of an object, substituting another object for the current object.
getIntro.call(hisinfo, "Jaipur", "Rajasthan");

let name2 = {
  firstName: "Sachin",
  lastName: "tendulkar",
};

// name.getIntro.call(name2); //this is also a method when func was inside name object
// getIntro.call(name2, "Chandigarh");

// Calls the function, substituting the specified object for the this value of the function,
// and the specified array for the arguments of the function.
getIntro.apply(name2, ["Chandigarh", "Punjab"]);

// bind method - basically its same as call() but it creates the copy of called function with object and
// then we can call this just like normal function, can be invoked later
let printMyName = getIntro.bind(name2, "Dehradun", "Uttarakhand");
// console.log(printMyName);
printMyName();
