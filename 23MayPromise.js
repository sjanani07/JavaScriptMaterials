//Type 1: Using direct Promise object
// Promise.resolve("Janani").then((x)=>console.log(x))
// .reject("Java").catch((y)=>console.log(y))
// .finally(()=>console.log("Exe Done"));

//Type 2: API call
// function api(){
//     return new Promise((resolve,reject)=>{
//         let success = false;

//         setTimeout(()=>{
//             if(success){
//                 resolve({id:1, name:"janani"});
//             }
//             else{
//                 reject("API Failed");
//             }
//         }, 1000);
        
//     });
// }

// console.log("API Call: "+typeof api());


// api().then((x)=>console.log(x.id))
// .catch((y)=>console.log(y))
// .finally(()=>console.log("Exe Done"));

//Type 3: Workflow. Callback hell
function login(){
    return new Promise((resolve)=>{
       
        setTimeout(()=>{
           console.log("Login successfull")
                resolve("Login Done");
                          
        }, 1000);
     
    });
}

function addToCart(cart){
    return new Promise((resolve)=>{
      
        setTimeout(()=>{
            console.log("added to cart");
                resolve("Add To Cart Success");
               
                       
        }, 1000);
     
    });
}

function payment(pay){
    return new Promise((resolve)=>{
              setTimeout(()=>{
            console.log("payment done");
                resolve("order123");
                
                       
        }, 1000);
     
    });
}

login()
.then(()=> addToCart())
.then(()=> payment())
.then((order)=>{
    console.log("z: "+order);
})

.catch((w)=>console.log("w: Errored" + w))
.finally(()=>console.log("Exe Done"));

