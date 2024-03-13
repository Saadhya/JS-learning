function checkPalindrome() {
  const str = "programizpro";
  let newstr = str;
  var rev = "";

  for (let i = newstr.length - 1; i > 0; i--) {
    rev += newstr[i];
  }
  console.log(rev);
  if (rev === str) {
    console.log("str is palindrome");
  } else {
    console.log("str is not palindrome");
  }
}
checkPalindrome();

let arr = [
  { name: "john", id: 1 },
  { name: "sima", id: 2 },
  { name: "mog", id: 3 },
  { name: "abby", id: 4 },
  { name: "sima", id: 2 },
];

function checkDup() {
  const uniqueObjects = arr.filter((item, index) => {
    const isDuplicate = arr.some((otherItem, otherIndex) => {
      return item.id === otherItem.id && index !== otherIndex;
    });

    return !isDuplicate;
  });
  console.log(uniqueObjects);
  return uniqueObjects;
  // console.log(arr.map((item)=>item.id))
}

checkDup();

// Arrow functions do not have their own this binding. Instead, they inherit the this binding from the surrounding lexical context.
const obj = {
  name: "John",
  printName: () => {
    console.log(this.name);
  },
};
// n this example, the this binding inside the printName() function refers to the obj object, even though the function is defined
// using an arrow function. This is because the arrow function inherits the this binding from the surrounding lexical context, which
// is the obj object.

obj.printName(); // "John"
