const start = Date.now();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h2").innerText = "new content";
  console.log("operations ", Date.now() - start, " ms");

  // timer
  let timer= 1;
  const timerInterval = setInterval(() => {
    document.getElementById("timer").innerHTML = "seconds " + timer++;
  }, 1000);

  let count = 1;
  // // counting the count number every second then displaying final
  // const inerval = setInterval(() => {
  //   document.getElementById("parent").innerHTML = "interval " + count++;
  // }, 3000);

  // // delaying 4 seconds to increase 1 count
  // const samayout = setInterval(() => {
  //   document.getElementById("box").innerText = "timeout " + count++;
  // }, 4000);

  // react uses virtual dom:
  // const virtualdom = {element: 'div', children:[{element:'p', text:'vdom'}];

  // DIFF BETWEEN FETCH & XMLHTTPREQUEST
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.google.com", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status <= 400) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("error ", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.log("request failed");
  };
  // send this to server
  xhr.send();

  // .then method used to handle the successful resolution of promise returned by fetch()
  document.getElementById("closure").innerHTML = fetch(
    "https://api.example.com/data"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  function outer(var1) {
    return function inner(var2) {
      console.log(`outer: ${var1}, inner: ${var2}`);
      document.getElementById(
        "closure"
      ).innerText = `outer: ${var1}, inner: ${var2}`;
    };
  }
  const closureExp = outer("outside fun")("inner");
  closureExp();
  // promise example
  let proExp= new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('promise resolved');
    }, 1000);
  })
  proExp.then(data=>console.log(data))
  .catch(err=>err)
});