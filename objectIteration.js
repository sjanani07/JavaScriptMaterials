let b ={
  name:'phython',
  age:10,
  location:'madurai',
  result:false
}
 
// console.log(a);
// console.log(b);
 
// let x =[1,2,3];
 
 
let a = {
  name: 'java',
  age: 20,
  location: 'chennai',
  result: true
};
 
// function name(lists) {
//   // lists.forEach(list=>console.log(list));
//   for (let key in lists) {
//     console.log(lists[key]); 
//   }
// }
 
name(a);
 
 
function name(lists) {
  Object.entries(lists).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });
}
 
 
//let y =10;
 
//y=${key};
 
//name(a);