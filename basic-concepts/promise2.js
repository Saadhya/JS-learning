// promise is replacement of call back function into another function
const cart = ["shoes", "suits", "bags"];

// here we are just passing the call-back function to the create-order(), which is not surity of handling it properly
// createOrder(cart, function (orderId) {
//   ptpayment(orderId);
// });
// we are making pyramid of doom- callback hell
// it will increase horizontally - conventional way
// createOrder(cart, function (orderId) {
//   ptpayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBal();
//     });
//   });
// });

// const promist = createOrder(cart);

// here we are attaching the call-back () to promise object - it will return either value or error
// so with assurance of data, it will run the attached () - promises are immutable
// promist
//   .then(function (orderId) {
//     return ptpayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   //promise chaining - here data flow is possible through this chain is by returning the func() call in previous then()
//   .then(function (paymentInfo) {
//     return updateWalletBal(paymentInfo);
//   });
// prevents from callback hell and we can do this by using => for single line without return statement

// real API example
const GITHUB_API = "https://api.github.com/users/octocat/repos";
const user = fetch(GITHUB_API);
console.log(user);

user.then(function (data) {
  console.log(data);
});
// what is promise?
// promise is an object representing eventual completion of an asynchronous operation.
