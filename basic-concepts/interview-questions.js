// reversing the string without any js function
const str = "random";
let newstr = "";
// const strarr = str.split()
for (let i = str.length - 1; i >= 0; i--) {
  newstr = newstr + str[i];
}
console.log(newstr);

// fibonacci series
const n = parseInt(prompt("Enter a number"));
let a = 0;
let b = 1;
let total = a + b;
while (total <= n) {
  console.log(total);
  a = b;
  b = total;
  total = a + b;
}

// reverse the sentence
// split()-> string to array
// reverse()-> reverse a string
// join() -> array to string

const input = "I love javascript";

function revString(data){
    var space = input.split(" ");
    console.log(input);
    const res = space.map((val)=>{
        // console.log(val.split("").reverse().join(""));
        return val.split("").reverse().join("");
    })
    return res.join(" ");
}
console.log("reverse: ", revString(input));

// QUESTION: 2
// arranging words by their length in a sentence
// split-> string to array
// sort-> reverse a string
// join -> array to string

const input2 = "react is a library";

function sortRevString(data){
    var space = data.split(" ");
    console.log(data);
    
    const asc = space.sort((a, b)=>{
        return a.length-b.length;
    })
    console.log("ascending; ",asc.join(" "));
    const desc = space.sort((a,b)=>{
        return b.length-a.length;
    })
    
    console.log("descending: " +desc.join(" "));
   
    return asc.join(" ");
}
console.log("sort by length and reverse : ", sortRevString(input));