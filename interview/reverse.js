
let sent = "Welcome to Programiz!";
// console.log(sent.length);

function rev(sent){
    for(let i =sent.length; i>0;i--){
    console.log(sent[i])
    // return res;
}
}
console.log(rev(sent));

// for react
import "./styles.css";
// Write React Code That Displays a Button With the Text 
// “Click Me” and Logs a Message to the Console When Clicked.
export default function App() {
  const fetchProducts=async ()=>{
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
    .then(res=>console.log(res))
    .catch(error=> console.log(error))

    console.log(await response)
  }

  return (
    <div className="App">
     <button onClick={()=>fetchProducts()}>
       Click Me
       </button>
    </div>
  );
}
