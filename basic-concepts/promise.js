const cart = ["shoes", "pants", "hoodies"];
// calling the function or getting the promise object returned
// const promise = createOrder(cart);
// console.log(promise); //will show you the promise status whether pending/fulfilled/rejected
// here we are attaching the object to the function or consuming the promise object
// promise.then().catch().finally()

// homework
createOrder, proceedToPayment, ShowOrderSummary, updateWallet;
// instead we can call directly function here and handling the promise object
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // can return data or promise
  })
  .catch(function (err) {
    console.log(err.message);
  })
  //   repeating then is promise chaining- we have to return always from one step to other step  in promise chaining
  .then(function (orderId) {
    return proceedToPayment(orderId); //returning the promise itself
  })
  //   this then() is to handle the previous promise object returned from step 2 in chaining - benefit of chaining
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  //   handling the error
  .catch(function (err) {
    console.log(err.message);
  })
  .then(() => {
    console.log("No matter what happens, I will definitely be called.");
  });

//   .finally(() => console.log("its finally"));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validate cart
    // orderId
    if (!validateCart(cart)) {
      // this way is showing red color error on console, which is not a good practice for production, we should handle it
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createorder
    // const orderId = DBcall.getorderId();
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
      //   setTimeout(() => {
      //     resolve(orderId);
      //   }, 5000);
    }
  }); //promise constructor

  return pr;
}
function validateCart(cart) {
  return false;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
    // reject("Payment method is not valid");
  });
}
