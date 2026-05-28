// arrow function - without function keyword + without function name
// arrow function concept 1:
let b=()=>{
  console.log("arrow function");
}
b();

// arrow function concept 2:
let p = (a,b) =>{
  return(a+b);
  } 
console.log("arrow function with params "+ p(5,2));

// arrow function concept 3: without return keyword
let q = (t,u)=> t-u;
console.log("arrow function with params "+ q(5,2));


// arrow function concept 4: single line of code
let i = ()=> console.log("arrow function with single line of code")
i()
