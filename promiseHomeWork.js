// let promise = new Promise((res, rej)=> {

// setTimeout(()=>{
// let a = "Jan";

// if (a===10){
//     res("Success");
// }
// else{
//     rej("Fail");
// }
// },5000)

// });

// promise.then((x)=>console.log(x))
// .catch((y)=>console.log(y))
// .finally(()=>console.log("Exe Done"));
function message(){
    console.log("user defined func");
    }

let promise = new Promise((resolve,reject)=>{

  let a=10;//undefined

  setTimeout(()=>{

    if(a===10){

    resolve(message())  // define the state -- pass

    }

    else{

      reject("failed") 

    }

  }, 5000);

});
 
promise.then((a )=>console.log(a))

.catch((b)=>console.log(b))

.finally(()=>{console.log("execution done")});
 


