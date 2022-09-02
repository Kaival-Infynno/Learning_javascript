// callback function:
// Benifit : You can wait for the result of previous function call and then execute another function

// function demo() {
//   function callSir(name, callback) {
//     console.log("Hello" + name);
//     callback();
//   }

//   function callStudent() {
//     console.log("Good Morning Students");
//   }
//   setTimeout(callSir, 3000, "kaival", callStudent);
// }
// demo();

// function demo() {
//   function sir() {
//     console.log("hello sir");
//   }
//   function student() {
//     console.log("hello student");
//   }
//   setTimeout(sir, 2000);
//   student();
// }
// demo();

//Promise: It is used to find out if the asynchronious operation is successfully completed or not
//3 state : pending , fullfill ,rejected

// let promise = new Promise(function(resolve ,reject){

// })

// function demo() {
//   let count = true;
//   let checkValue = new Promise(function (resolve, reject) {
//     if (count) {
//       resolve("Yes");
//     } else {
//       reject("No");
//     }
//   });
//   checkValue
//     .then(function success() {
//       console.log("First then");
//     })
//     .then(function success2() {
//       console.log("second then");
//     });

//   console.log(checkValue);
// }
// demo();

// function demo() {
//   let checkPromise = new Promise(function (resolve, reject) {
//     reject("Rejected");
//   });
//   checkPromise
//     .then(function success() {
//       console.log("success");
//     })
//     .catch(function errCheck(result) {
//       console.log("catch block call", result);
//     })
//     .finally(function alwaysPrint() {
//       console.log("Finally we are Understood whole Promise");
//     });
// }
// demo();

// function demo() {
//   let data = true;
//   let newPromise = new Promise(function (resolve, reject) {
//     if (data) {
//       resolve("Resolve call");
//     } else {
//       reject("reject call");
//     }
//   });
//   newPromise
//     .then(function success(result) {
//       console.log(result);
//       console.log("Then call after coming out successfully");
//     })
//     .then(function success1() {
//       console.log("second then");
//     })
//     .catch(function catchError() {
//       console.log("something went rong");
//     })
//     .finally(function alwaysPrint() {
//       console.log("Greate You Learn everything in promise");
//     });
// }
// demo();

// function demo() {
//   let value = false;
//   let myPromise = new Promise(function (resolve, reject) {
//     if (value) {
//       resolve("geted");
//     } else {
//       reject("rejected");
//     }
//   });
//   myPromise
//     .then(function check(data) {
//       console.log(data);
//     })
//     .catch(function handleError(data) {
//       console.log(data);
//     });
// }
// demo();

//Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
//You can perform an operation after a promise is resolved using methods then(), catch() and finally().

//javascript async and await
//async used with asynchronous function.The async function return a Promise

// function asyncLearn() {
//   async function f() {
//     console.log("async function");
//     return Promise.resolve();
//   }
//   f().then(function yes() {
//     console.log("Another step");
//   });
// }
// asyncLearn();

// The await keyword is used inside the async function to wait for the asynchronous operation.

// function learnAsyncAwait() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Promise resolve");
//     }, 4000);
//   });

//   async function myFun() {
//     let result = await promise;
//     console.log(result);
//     console.log("hello");
//   }
//   myFun();
// }
// learnAsyncAwait();

// function learnAsyncAwaitWithTry() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("resolve");
//     }, 4000);
//     async function myFun() {
//       try{

//       }
//     }
//     myFun();
//   });
// }
// learnAsyncAwaitWithTry();
