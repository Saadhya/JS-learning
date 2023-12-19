var des = { age: 25, hair: "long", beard: true };
var source = { hair: "long", beard: true };

const findMatch = (obj, src) =>
  Object.keys(src).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

console.log(findMatch(des, source));
console.log(
  findMatch(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // false
console.log(
  findMatch(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
); // false
