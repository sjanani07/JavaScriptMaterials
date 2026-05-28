// // // Spread operator
// // // to spreads the collection of data
// // // collection of data  - array,object,string
 
//string iterables
 
let a ='unexpected error';
// console.log(a);
// console.log(a.length);
 
for(let i =0;i<a.length;i++){
  let char =a.charAt(i);
  console.log(char);
}
 
// console.log(...a);
 
//usecase -1 - converting string to object
let b = {...a};
console.log(b);
 
//usecase -2 - converting string to an array
let c = [...a];
console.log(c);