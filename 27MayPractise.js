
//Promise chaining -> .then.then.then.catch
//await
// 1. Keyword.
// 2. We use this, when we get the function return type as promise.
// 3. Pause the execution of an async function until a Promise is resolved (or rejected).
// 4. await can only be used inside an async function.
// 5.to handle asynchronous operations in a clean and readable way.

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a =10;
            if(a===20){
                resolve("Data Received");
            }
            else{
                reject();
            }
            
            
        }, 5000)
    });
}

function name(){
    console.log("name function");
}

async function fetchData(){
  console.log("Start");  
  try {
 let result = await getData(); //pause the execution
  //name();
  console.log(result);
}
catch(error) {
    console.log("Error: "+error);
}

  console.log("End");
}
fetchData();
name();

// let a = [1,2,3,4,5]; //index = 4, length = 5
// for(let i=0;i<a.length;i++){
// console.log(a[i]); //a[0]
// }

// let b = [1,2,3,4,5];
// b.forEach((value)=>console.log(value));
// namedfn();
// function namedfn(){
//     console.log("named func");
// }


// let a = function (){
//     console.log("unnamed func");
// }
// a();


// let b = function namedExpression(x,y){
//     let z =x+y;
//     console.log("named with Exp z: "+z);
// }
// b(10,20);

// let c = (w)=>console.log("arrow fucntion w: "+w);
// c("Janani");

// let q = {
//     name: "java",
//     age: 50,

//     student:[{
// name: "janani",
// age: 10
//     },
// {
//     name: "lakshmi",
//     age: 20
// }
// ],

// nestedObj:{
//     name: "JS",
//     age:100
// }

      
// }

// function obj(p){
//     console.log(p.nestedObj.name);
// }

// obj(q);

