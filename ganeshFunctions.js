//const { use } = require("react");

// named  - function keyword + function name
function name1(){
}
//unnamed  - Need function keyword. No need function name.
let a =function(){
  console.log("run");
}
a();
// named function with expression
let c =function name2(){
   console.log("named function with expression");
}
// named function with params
//type -01
// function name3(a,b){
//   let c = a+b;
//   console.log(" c "+c);
// }
// name3(3,2); // c 5
// name3(); //  c NaN.
// name3("java","phython"); // c javaphython
//type -02 - default param declaration
function name4(a="qa"){
  let c = a;
  console.log(" c "+c);
}
//Can be called as below:
name4();
name4("stag");

//type -03
//function name5(a="qa",username){ 
//In JavaScript, default parameters must come after non-default parameters.
//This causes unexpected behavior when arguments are missing.
function name5(username,jobId,a="qa", b="end"){
  let c = a+jobId+username+b;
  console.log(" c "+c);
}
name5("dev","js"); //qajsdevend
name5("stag"); //qaundefinedstagend
//name5("name 5 "+a(),"logic");
//name5(name5.a,"logic");


 
 
 
 
 

 