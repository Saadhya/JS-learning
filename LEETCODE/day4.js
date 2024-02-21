/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  let mytimer;
  let cancel = () => {
    clearInterval(mytimer);
  };
  mytimer = setInterval(() => fn(...args), t);
  return cancel;
};

const result = [];
const fn = (x) => x * 2;
const start = performance.now();
const args = [4],
  t = 35,
cancelTimeMs = 190;
// const cancelFn = cancellable((x) => x * 2, [4], 35);
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
//   console.log(result);
};
const cancelFn = cancellable(log, args, t);
setTimeout(cancelFn, cancelTimeMs);
setTimeout(() => {
  console.log(result);
}, cancelTimeMs + t + 15);

// Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 35ms. fn(4) returns 8.
// 3rd fn call is at 70ms. fn(4) returns 8.
// 4th fn call is at 105ms. fn(4) returns 8.
// 5th fn call is at 140ms. fn(4) returns 8.
// 6th fn call is at 175ms. fn(4) returns 8.
// Cancelled at 190ms
