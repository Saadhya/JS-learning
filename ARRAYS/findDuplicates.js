// find duplicates :
// https://www.geeksforgeeks.org/javascript-program-to-find-duplicate-elements-in-an-array/
let array = [2, 3, 4, 5, 6, 10, 2, 3];

// using for loop
function findDuplicates(array) {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        duplicates.push(array[i]);
      }
    }
  }
  console.log("13 "+duplicates);
  return duplicates;
}

//   using hashtable

function findDuplicates(array) {
  const hashTable = {};
  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]] === undefined) {
      hashTable[array[i]] = 1;
    } else {
      hashTable[array[i]]++;
    }
  }

  const duplicates = [];
  for (const key in hashTable) {
    if (hashTable[key] > 1) {
      duplicates.push(key);
    }
  }
  console.log("36 "+duplicates);
  return duplicates;
}
//   using set object
function findDuplicates(array) {
  const set = new Set();
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      duplicates.push(array[i]);
    } else {
      set.add(array[i]);
    }
  }
  console.log("50 "+duplicates);
  return duplicates;
}

//   filter and indexof()
const findDuplicate = () => {
  const duplicates = array.filter((element, index) => {
    return array.indexOf(element) !== index;
  });
  console.log("59 "+duplicates);
  return duplicates;
};

console.log(findDuplicates(array));

// duplicate fun can be created with different params using normal fun but not arrow funs
