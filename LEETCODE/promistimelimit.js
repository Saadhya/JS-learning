/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
//  this includes function currying,
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var timeLimit = function (fn, t) {
  return (...args) => {
    return Promise.race([
      fn.call(this, ...args),
      delay(t).then(() => {
        throw "Time Limit Exceeded";
      }),
    ]);
  };
  //     (async function main() {
  // Tests
  // const fn1 = (n) => delay(1000).then(() => n*n);

  //     const timed1 = timeLimit(fn1, t);
  //     await timed1(3).then(console.log); // 9

  //     const timed2 = timeLimit(fn1, t);
  //     await timed2(3).catch(console.log); // "Time Limit Exceeded"

  //     // Your test case
  //     const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
  //     limited(150).catch(console.log); // "Time Limit Exceeded"
  // })();
};
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

