// throttling in javascript
const expensive = () => {
  console.log("expensive");
};

throttle = (fun, limit) => {
  let flag = true;

  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fun.apply(context, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttlingExp = throttle(expensive, 100);
// window.addEventListener("resize", throttlingExp);
