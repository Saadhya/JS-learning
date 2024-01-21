// debouncing in javascript
const sec = document.getElementById("val")
console.log("debouncing start");
console.log(sec);

// pure and impure functions
var x = 10;
function impurefunc(y) {
  return x + y;
}
function purefunc(x, y) {
  return x + y;
}
console.log("impure func: " + impurefunc(40));
console.log("pure func: " + purefunc(40, 20));

let counter = 0;
// debouncing function
const getData = (data) => {
  console.log("fetching Data...", counter++, " ", data);
};

// debouncing syntax - it takes function and delay(time)
const debouncing = function (fn, d) {
  let timer;

  return function (...args) {
    let context = this;
    // args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};
const betterFunc = debouncing(getData, 300);

// revise debounce
function hofDebounce(func, timeout) {
  let timer;
  return function (...args) {
    console.log(args);
    // console.log(timer);
    if (timer) clearTimeout(timer); //clear previous timer
    timer = setTimeout(() => {
      func(args);
    }, timeout);
  };
}
const result = hofDebounce(getData, 200);
sec.addEventListener("keyup", (e) => result(e.target.value));
// .addEventListener("keyup", (e) => result(e));

console.log("debouncing ends herer");
