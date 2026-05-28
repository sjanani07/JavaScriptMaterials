// function myName(){
// 	console.log("Janani");
// }

// myName();


// let a = function (){
// console.log("unnamed function");
// }
// a();

// function param(x){
// console.log(x);
// }
// param(10);

// let b = function express(y){
// console.log(y);
// }
// b(20);

// //no function keyword and no function name 
// let c = () => console.log("arrow function");
// c();

//rest param - inside function 
// function restParam(...rest){
//     console.log(rest);
// }
// restParam(1,2,3);

//spread operator - arugement pass and varaible declaration.
//let a = [...value];

// let b = [1,2,3,4,5];
// function spreadOpt(...x){
//     console.log(x);
// }
// spreadOpt(...b);


// let b = [1, 2, 3, 4, 5];

// function displayValues(a, b, c, d, e,f) {
//   console.log(a, b, c, d, e,f);
// }

// displayValues(...b); // spread operato
// d(1,2);
// let d = function named(a,b){
//   let c = a+b;
//   console.log("c: "+c);
// }

// var a;
// console.log(a); // undefined
// a = 10;



let accountNo;

function setAccountNo(value) {
  if (typeof value !== "number") {
    throw new Error("Account number must be an integer");
  }
  accountNo = value;
}

setAccountNo(12345);      // ✅ OK
setAccountNo("ABC123");

