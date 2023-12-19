// debouncing in javascript

let counter = 0;
const getData = () => {
  console.log("fetching Data...", counter++);
};

// debouncing syntax - it takes function and delay(time)
const debouncing = function (fn, d) {
  let timer;

  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};
const betterFunc = debouncing(getData, 300);
