// The rest parameter collects all arguments into an array.
// The spread parameter spreads the array in to single element.
 
function func1(a,b,c,d){
  let sum =a+b+c+d;
  console.log("sum "+sum);
}
func1(2,4,6,8);
 
function func2(...values){ // arguments will be collected and stored as an array
  console.log(values); // [1,2,3]
  console.log("values "+ values);  // "values " +"'1','2','3'" //values 1,2,3 
  //String + Non-string(rest param) concat means - it breaks the rest param into seperate strings and merges it.
  console.log(5+values);     //5+"1, 2, 3"  => 51,2,3
  console.log(5+2); //7 // math operator
  console.log(5+"string");//5string  // concatination operator
}
func2(1,2,3); 

//Purpose of rest param - When we are not aware of # of arguments to be passed. 
// 2 diff arrays - to merge and then split and use it into a single element - spread operator. 
