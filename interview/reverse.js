// Write React Code That Displays a Button With the Text
// “Click Me” and Logs a Message to the Console When Clicked.
// export default function App() {
//   const fetchProducts=async ()=>{
//     const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
//     .then(res=>console.log(res))
//     .catch(error=> console.log(error))

//     console.log(await response)
//   }

//   return (
//     <div className="App">
//      <button onClick={()=>fetchProducts()}>
//        Click Me
//        </button>
//     </div>
//   );
// }
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

console.log("reverse array " + reverse([1, 2, 3, 4, 5, 6, 7]));

function rev(str) {
  let output = "";
  for (let i = str.length-1; i >= 0; i--) {
    output += str[i];
    // console.log(str[i])
  }
  return output;
}
const text = "Welcome to Programiz!";
console.log("reverse string: " + rev(text));
