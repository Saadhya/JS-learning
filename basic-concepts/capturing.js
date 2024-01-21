document.querySelector(".grandparents").addEventListener(
  "click",
  (e) => {
    console.log("its grandparents");
    // e.stopImmediatePropagation();
  },
  true
); //capturing
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("its parent");
  },
  false
); //bubbling
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("its child");
    e.stopPropagation();
  },
  true //capturing
);
// document.querySelectorAll("*").addEventListener("focus", (e) => {
//   console.log(e.tagName);
// });

// let bubble = () => {
//   console.log("they are grandparents");
// };
