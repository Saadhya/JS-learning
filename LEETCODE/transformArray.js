// https://leetcode.com/studyplan/30-days-of-javascript/
// https://leetcode.com/problemset/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let arrn = [];
  for (let i = 0; i < arr.length; i++) {
    var res = fn(arr[i], i);
    arrn.push(res);
    // console.log(res);
  }
  return arrn;
};
function plusone(n) {
  return n + 1;
}
function plusI(n, i) {
  return n + i;
}
let arr = [1, 2, 3];

const resp = map(arr, plusone);
const res2 = arr.map(plusI);
console.log(resp);
console.log(res2);

// SECOND: FILTER ARRAY
var filterd = function (arr, fn) {
  let arrn = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) arrn.push(arr[i]);
  }
  return arrn;
};
function firstIndex(n, i) {
  return i === 0;
}
function greaterThan10(n) {
  return n > 10;
}
filterd(arr,firstIndex);
filterd(arr,greaterThan10);

const reducedArr = function(nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
function sum(accum, curr) {
  return accum + curr * curr;
}
// function sum(accum, curr) { return 0; }
// function sum(accum, curr) { return accum + curr; }
console.log(reducedArr([1,2,3,4], sum,0));

// to run in browser
// var script = document.createElement('script');
// script.src = 'my_javascript_file.js';
// document.head.appendChild(script);
