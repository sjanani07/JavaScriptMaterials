let a ={
  name:"java",
  age:25
}
 
function name2(x){ // x is reference variable
 console.log(x.name);
}
  
function name2(name='js'){
   console.log(name);
}
 
// name2("java");
// name2(a); //a is an object. name = a. console.log(a) prints the whole object, NOT a.name.
// name2({ //Object override or my assignement was to print only the name = java from object a. 
//     name:"java",
// })

// To achieve name2(a), we can use the below function as well
function name2(param = { name: 'js' }) {
  console.log(param.name);
}
name2(a);
name2();

 