// object iterables
 
let a = {
  name:'java',
  age:45
}
 
let c = {
  location:'chennai',
  mob:9868678965
}
 
// console.log(a);
 
 
// usecase 1 - copy a object to another object
 
// let b = a;
 
// console.log(b); // not advisable
 
b ={...a} // best practice
 
console.log(b);
 
// usecase 2 - merging two different object as a single object
 
 
let d = {a,c} // - not a best practice
console.log(d);
 
d={...a,...c}; // best practice
console.log(d);
 
//usecase 3 - adding additional values with existing object
 
let e ={...a,class:'batch01'};
console.log(e);
 
//usecase 4 - modify the existing value
 
let f ={...e,age:65};
console.log(f);
 
//usecase 6 - using spread operator in function 
function name(x){
  console.log(x);
  console.log(x.name);
}
name({...a}); // best practice
name(a);