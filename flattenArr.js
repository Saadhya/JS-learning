// flatten array of array

let arrs = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, 11], 12], 13, 14];

// approach
// 1) recursive function
// 2) array

let output = "";
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // recursion
      flatten(arr[i]);
    } else {
      output = output + arr[i] + ", ";
    }
  }

  return output;
}

// console.log(flatten(arrs));
