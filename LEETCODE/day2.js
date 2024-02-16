/**first
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    functions.reverse().map((item) => {
      x = item(x);
      // console.log(x)
    });
    // let n = functions.length;
    // for (let i = n; i >= 0; i--) {
    //   // console.log((new Function(functions[i]))(x))
    //   x = new Function(functions[i])(x);
    //   console.log(x);
    // }
    return x;
  };
};
const arr = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const res = compose(arr);
// console.log(res(4)); //65

/**second
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};
// console.log(argumentsLength(1, 2, 3));

/**third
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      // console.log(args.length)
      return fn(...args);
    } else {
      // The function has already been called, so do nothing.
      return;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn/

/** fourth- creating custom memoized function
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    // console.log(key);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
// console.log(memoizedFn(2, 3));
console.log(memoizedFn(0,0));
console.log(memoizedFn(0,0));
console.log(callCount);
