// const startTime = performance.now();
// // Call the function here
// const endTime = performance.now();
// const delay = endTime - startTime;

// console.time('myFunction');
// // Call the function here
// console.timeEnd('myFunction');

    /**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    let res;

    function cancel() {
        clearTimeout(res)
    }
    res = setTimeout(() => fn(...args), t);
    return cancel;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
// EXPLAINATION
// The cancellable() function returns a function called cancel(). When the cancel() function is called, it will cancel the delayed execution of the fn function.
// In the example above, we create a cancelFn variable and assign it the result of calling the cancellable() function. We then pass the cancelFn variable to the setTimeout() function.
// The setTimeout() function will call the cancelFn function after 1000 milliseconds. However, we immediately call the cancelFn function, which will cancel the delayed execution of the fn function.
// As a result, the fn function will never be called.