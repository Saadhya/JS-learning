import "./styles.css";
import React, { useState } from "react";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const addCities = () => {
    if (city.trim() !== "") {
      setCities([...cities, city]);
    }
    setCity("");
  };
  const removeCity = (index) => {
    const updatedCities = cities.filter((_, i) => i != index);
    setCities(updatedCities);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="input-section">
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <button onClick={addCities}>Add</button>
      </div>
      <ul>
        {cities &&
          cities.map((i, n) => (
            <li key={n}>
              {i} <button onClick={() => removeCity(n)}>X</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "./styles.css";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [progress, setProgress] = useState(10);
  const setValuer = (e) => {
    // if (progress < 100) setProgress((prev) => prev + 10);
    setProgress(Number(e.target.value));
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={progress} />
        <form>
          <label for="html">Input Percentage:</label>
          <input
            min="1"
            max="100"
            type="Number"
            value={progress}
            onChange={setValuer}
          />
        </form>
      </div>
    </>
  );
}
const ProgressBar = ({ width }) => {
  return (
    <div className="container">
      {width >= 0 && width <= 100 ? (
        <div className="innerContainer" style={{ width: `${width}%` }}>
          {width}%
        </div>
      ) : (
        alert("Please enter less than 100% and more than 0%")
      )}
    </div>
  );
};

css
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 5px;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
input {
  border-radius: 20px;
  width: 70px;
  padding: 10px;
  outline: none;
}
.App {
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.App > * {
  margin: 10px;
}
.container {
  width: 50vw;
  height: 30px;
  border-radius: 40px;
  border-style: none;
  background-color: #cdcdcd;
  color: red;
  position: relative;
  z-index: -1;
}
.innerContainer {
  height: 28px;
  display: grid;
  border-style: none;
  place-items: center;
  border-radius: 20px;
  margin: auto;
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  color: white;
  position: absolute;
  transition: 1.5s ease 0.3s;
  z-index: 100;
}

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    age: 0,
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setShow(false);
    const val = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: val.toUpperCase(),
    });
  };
  function handleClick() {
    setShow(true);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="input-section">
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="input-section">
        Full name:
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="input-section">
        Age:
        <input
          type="Number"
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
      </div>
      <div className="input-section">
        <button onClick={handleClick}>Submit</button>
      </div>
      {show && show ? (
        <>
          <h2>Request sent to db with below request data.</h2>
          <div class="output-section">
            <ul>
              <li>Username:{formData.username}</li>
              <li>Fullname:{formData.fullname}</li>
              <li>Age:{formData.age}</li>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
.App {
  font-family: sans-serif;
}
.App > * {
  margin: 15px;
}
.input-section {
  display: flex;
  flex-direction: column;
  width: 40%;
}

timer with button counter
import { useState, useRef } from "react";
import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(10);

  const timeRef = useRef(null);

  const handleCounter = () => {
    setClicks((prev) => prev + 1);
  };

  useEffect(() => {
    if (time > 0) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } // Stop the timer when time reaches 0

    if (time === 0 && timeRef.current) {
      clearInterval(timeRef.current);
    } // Cleanup on unmount or before setting a new interval

    return () => clearInterval(timeRef.current);
  }, [time]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="timer-box">
        <h1>{clicks}</h1>
        <h2> Time left: {time} seconds</h2>
      </div>
      {time === 0 ? "" : <button onClick={handleCounter}>+</button>}
    </div>
  );
}


import "./styles.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Route, useParams } from "react-router-dom";

/* Instructions 
  Create two Routes so that the given navigation works.

  When the user navigates to /Ram, they should see "Student: Ram".
  When the user navigates to /ids/1, they should see "Ids : 1".
*/

const Employee = () => {
  const { name } = useParams();
  // alert(name);
  return (
    <div className="display">
      <h3>Employee: {name}</h3>
    </div>
  );
};

const Ids = () => {
  const { id } = useParams();
  // alert(id);
  return (
    <div className="display">
      <h3>Ids : {id}</h3>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <h2>Employee</h2>
      <ul>
        <li>
          <Link to="/ram/">Ram</Link>
        </li>
        <li>
          <Link to="/Lakshman">Lakshman</Link>
        </li>
        <li>
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>
      <h2>Id's</h2>
      <ul>
        <li>
          <Link to="/Ids/1">1</Link>
        </li>
        <li>
          <Link to="/Ids/2">2</Link>
        </li>
        <li>
          <Link to="/Ids/3">3</Link>
        </li>
        <li>
          <Link to="/Ids/4">4</Link>
        </li>
      </ul>

      <hr />

      {/* Create Routes here */}
      <Routes>
        <Route path="/:name" element={<Employee />} />
        <Route path="/Ids/:id" element={<Ids />} />
      </Routes>
    </Router>
  );
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

:root {
  --black: #000;
  --white: #fff;
  --blue: #2d7fea;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: Helvetica Neue, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 120%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--black);
  color: var(--white);
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px;
}

ul {
  display: flex;
  gap: 50px;
}
.display {
  background-color: white;
  height: 300px;
  max-height: 50vh;
  width: 100%;
  color: black;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: var(--blue);
  font-weight: 600;
}
.display {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

ROUTER:-
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./customStyles.css";
import "./styles.css";

/* Instructions :
 Once user enter details and clicks on submit button redirects/switch  him to /routes page */

function Results() {
  return <div className="center">Thanks for submitting details...</div>;
}

function Form() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "name" ? setName(value) : setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && age !== "") {
      setShow(false);
      nav("/results");
    } else {
      setShow(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Your name
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          id="name"
        />
      </label>
      <label htmlFor="age">
        Favorite age
        <input
          type="text"
          value={age}
          onChange={handleChange}
          name="age"
          id="age"
        />
      </label>
      <button type="submit">Submit</button>
      {!show ? "" : <h2>please enter values</h2>}
    </form>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}


ERROR PAGE:-
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

/* reactchallenges.live */

/* Instruction: 
Implment a catch route for all routes which are not under defined routes scope*/

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const ErrorPage = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}


import "./styles.css";
import { useEffect, useState } from "react";

// Instructions:
// Create a custom Hook to detect if the user scrolled to the bottom of the page

const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setIsBottom(scrollTop + windowHeight >= fullHeight - 1); // -1 for precision
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isBottom;
};

export default function App() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  
	const arr = Array.from({ length: 19 }, (_, i) => (i + 1).toString());

  return (
    <div className="App">
      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}



const str= "metroin";
var revstr=""
for(let i=str.length;i>0;i--){//5, 4, 3, 2, 1
    revstr+=str[i-1];
}
console.log(revstr);


not working as expected :-
import {useState} from 'react'

export default function App() {
    // show in all cate, whenever click on 
    const [category, setCategory]=useState(["All", "fruits","sports"])
    const [all, setAll]=useState(["apple", "mango",
                                  "football", "cricket", "grapes"])
    const [fruitsList, setFruits]=useState([])
     const [sportsList, setSports]=useState(["football", "cricket"])
    const [items, setItems]= useState(
        ["apple", "mango",
                                  "football", "cricket", "grapes"]);
    const handleChange=(e)=>{
        const val= e.target.value;
        // console.log(e.target.value);
        if(val && val==="apple"|| "grapes"||"mango"){
            // setFruits((prev)=>{ prev, val});
        setItems((prev)=> items.filter((i)=>items!==val));
            
        }
        console.log(fruitsList)
    }
    const showCate=(val)=>{
        // console.log(val);
        if(val=="fruits")
            setItems(fruitsList);
         else  if(val=="sports")
            setItems(sportsList);
        else 
             setItems(all);
    }
  return (
     <div>
          category:
         {category.map((val, i)=>(
          <button onClick={()=>showCate(val)}>{val}</button>
         ))}
     <br/>
        
         items:
         <ul>
         {items.map((val, i)=>(
          <li><input type="checkbox" value={val} onChange={handleChange}/>{val}</li>
         ))}
             </ul>
        
     </div>
  )
}

// array of string and iterate, 


// js question code:-
const numbers = [11, 25, 31, 23, 33, 18, 200];
const a = numbers.sort();
console.log(numbers); //11, 18, 23, 25, 31, 33, 200
console.log(a); //11, 18, 23, 25, 31, 33, 200

//numbers.sort((a, b)=>{})
const sortFun=(nums[])=>{
    nums.map((a)=>{ //11, 
        if(a>b){
      return a;
  }  else{
      return b;
  }
    })
  
}
sortFun();

printHello();//hello
printHi();//hi

function printHello(){
console.log("hello")
}

var printHi = ()=> {
console.log("hi);
}

console.log(+'abc') //abcd

 { box-sizing: border-box; }
 
 var personalDetail = {
	name : 'test',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 1234568,
	    workPhone : 7879456
	  }
	}
}
interface detailInterface{
    'name':string,
    'address':{
        'location':string,
        'zip':string,
        'phoneNumber': {
            'homePhone': number || 00,
            'workPhone': number
        }
    }
}

// clicking prev or next , no diff in both actions
// we don't have direct events
//  we can capture particular page number 
//  technically not possible 


db.books.insert([
[
title:'War and Peace',
genre:'Historical Fiction',
author:'Lev Nikolayevich'
read:false
},
{
title:'Les Miserable',
genre:'Historical Fiction',
author:'Victor Hugo'
read:false
},

const readFileContent=()=>{
    // Can you write a function in Node.js that reads multiple files from the filesystem concurrently, waits for all the file reads to finish, and returns the content of the files in an array?
    const fs = require('fs');
    const files = ['./file1.txt', './file2.txt', './file3.txt'];
    const fileContents = [];
    let count = 0;
    files.forEach((file, index) => {
      fs.readFile(file, 'utf8',
        (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fileContents[index] = data;
          count++;
          if (count === files.length) {
            console.log(fileContents);
          }
        });
    })
    return fileContents;
    
}

module.exports= readFileContent;



const readFileContent = require('../src/demo');
const fs = require('fs');
const path = require('path');
const files = ['./file1.txt', './file2.txt', './file3.txt'];
const fileContents = [];
let count = 0;
const expected = ['Hello World', 'Hello World', 'Hello World'];
const callback = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fileContents.push(data);
        count++;
        if (count === files.length) {
            expect(fileContents).toEqual(expected);
        }
    }
};
files.forEach((file) => {
    fs.readFile(path.join(__dirname, file), 'utf8', callback);
});
describe('readFileContent', () => {
    it('should return the content of the files in an array', () => {
        expect(readFileContent()).toEqual(expected);
    });
});

