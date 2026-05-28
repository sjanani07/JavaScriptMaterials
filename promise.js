/*Promises:
Promise is an object that represents the eventual result of 
an asynchronous operation.
 
Instead of doing something immediately, a Promise says:
 
“I’ll give you a result later — either success or failure.”
 
🔹 Why Promises?
 
JavaScript is asynchronous (e.g., API calls, file reading, timers,
DB data fetching, downloading/uploading ops).
Promises help you avoid messy callback hell and write cleaner code.
**/
 
// States of Promises:
// 1.Pending // declaring the promise not executed
// 2.Resolved/Fulfilled // execution completed and succesfully received a data
// 3.Rejected // execution completed and failed to fetch the result
 
// 1.Pending
 
// let a = new Promise((resovle,reject)=>{
//   setTimeout(()=>{
//     let a ;
//     if(a===10){
//   resolve(a);

//   }, 30000);
// });
 
// resovle() - sends the success data - function
// reject() - sends the error data - function
 
// Functions:
// then() //Resolved
// catch() //Rejected
// finally() // Resoved or Rejected


/*Promises:

Promise is an object that represents the eventual result of 

an asynchronous operation.
 
Instead of doing something immediately, a Promise says:
 
“I’ll give you a result later — either success or failure.”
 
🔹 Why Promises?
 
JavaScript is asynchronous (e.g., API calls, file reading, timers,

DB data fetching, downloading/uploading ops).

Promises help you avoid messy callback ***** and write cleaner code.

**/
 
// States of Promises:

// 1.Pending // declaring the promise not executed

// 2.Resolved/Fulfilled // execution completed and succesfully received a data

// 3.Rejected // execution completed and failed to fetch the result
 
// 1.Pending
 
// let a = new Promise((resovle,reject)=>{

// });
 
 
// resovle() - sends the success data - function

// reject() - sends the error data - function
 
 
// function:

// then() //Resolved

// catch() //Rejected

// finally() // Resoved or Rejected
 
 
//resolve/reject  ==> string,array,object,function
 
/*

let promise = new Promise((resolve,reject)=>{

  let a=10;//undefined

  setTimeout(()=>{

    if(a===10){

    resolve("value is correct")  // define the state

    }

    else{

      reject("invalid")

    }

  }, 5000);

});
 
promise.then((resolve)=>console.log(resolve))

.catch((reject)=>console.log(reject))

.finally(()=>{console.log("execution done")});
 
**/
 
/*resolve/reject
 
string

Numberobject

array

function callback

userdefined function

API response

it can be anything

**/
 
 
/*

let promise = new Promise((resolve,reject)=>{

  let a=10;//undefined

  setTimeout(()=>{

    if(a===10){

    resolve(5)  // define the state

    }

    else{

      reject(0)

    }

  }, 5000);

});
 
promise.then((resolve)=>console.log(resolve))

.catch((reject)=>console.log(reject))

.finally(()=>{console.log("execution done")});
 
**/
 
/*

let obj ={

  name:'java',

  age: 25

}
 
let promise = new Promise((resolve,reject)=>{

  let a=1;//undefined

  setTimeout(()=>{

    if(a===10){

    resolve(obj)  // define the state

    }

    else{

      reject(obj)

    }

  }, 5000);

});
 
promise.then((a)=>console.log(a.age))

.catch((b)=>console.log(b.name))

.finally(()=>{console.log("execution done")});
 
**/
 
/*function message(){

  console.log("received message");

}
 


 