const handleClick = () => {
  alert("click me");
  return <button onClick={handleClick}>click me</button>;
};

const [user, setUser] = useState({
  name: "",
  email: "",
});

// form submission
const handlechange = (e) => {
  const { name, value } = e;

  // setUser((prev)=>{
  // ...prev,
  // [name]:value
  // }
};

const handleSubmit = () => {
  console.log(user);
  console.log(user.email);
  alert(user.email);
};
{
  /* <form onSubmit={handleSubmit}>
<input type="text" value={user.name} onchange={handlechange}/>
<input type="email" value={user.email} onchange={handlechange}/>
<button type="submit">save</button>
</form> */
}

// props:
<productitem data={products} />;

const productitem = ({ data }) => {
  console.log(data);
};

// three react hooks
useState();
useContext();
useEffect();

//routing
{
  /* <Route element="" path="/"/> */
}

//arrow function
// function abc(){
// return;
// }
// const abc=()=>{}

// SECOND DAY INTERVIEW-
// const Products=()=>{
//   const [name, setName]=useState("neha")
//   const [message, setMessage]=useState("")

//   const handleClick=(e)=>{
//   if(name==="kajal"){
//     setMessage("")
//   }else{
//   setName("kajal");
//   setName((prev)=> )
//   setMessage("name changed")
//   }

//   }
//   useEffect()

//   return (
//   <div>
//     {name}
//   <button onClick={handleClick}>click me</button>
//   {message}

//   </div>
//   )

//   };

// learn the more efficient way of updating values without if() and using useefffect()
