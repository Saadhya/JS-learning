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

// functions :- javascript

// data.split(" ");
// arr.reverse();
// arr.map()
