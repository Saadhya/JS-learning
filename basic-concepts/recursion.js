const arr = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr.length);
function flatArr(arr) {
  var a = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (Array.isArray(arr[i])) {
      flatArr(arr[i]);
    } else {
      console.log(arr[i]);
      a.push(arr[i]);
    }
  }
  // console.log(Array.toString(a))
  return a;
}
console.log(flatArr(arr));
// console.log("Welcome to Programiz!");
