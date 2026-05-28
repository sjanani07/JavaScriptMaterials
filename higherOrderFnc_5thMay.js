//call back function
// Higher order function
  //  it will receive a another function
  // it will return a function
 
function name1(){
  console.log("call back name1");
}
 
 
function name2(callback){
    console.log("name2");
    // name1();
    callback();
    // setTimeout(function() {}, 600000);
    // return function(){
    // }
}
 
 
// name2(name1);
 
//name1 - callback function
// name2 - higher order function
 
 
function func(a,b){
  let c= a+b;
  console.log("func "+c);
  return ()=>{
    let y =4+7;
    console.log("arrow "+y);
return y;
};
}
 
 
let u= function main(){
  let y =func(2,3);
  console.log(y);
}
 
u();
 