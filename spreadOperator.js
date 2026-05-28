// spread operator

//type 1 
// It spreads (expands) the elements of array e
//Creates a new array copy
//f and e are different arrays in memory
let e = [10,20,30];
//let f =e;
//console.log(f);
// instead of let f=e; define as below:
let f = [...e];
//console.log(f);

//type 2 
//...a expands the elements of array a
//...b expands the elements of array b
//Both expanded values are combined into a new array c
let a =[1,2,3];
let b = [4,5,6];
let c = [...a,...b]; // spread operator
//console.log(c);

//type 3
//Here, ...y is the spread operator.
//It expands the array: ans(2,4,6);
//so internally a=2, b=4, c=6.
let y =[2,4,6] // best practice to declare values for a variable.
function ans (a,b,c){
 let  result = a+b+c;
  console.log(result);
}
ans(...y);// It expands and seperates a single component [2,4,6] into seperate each component as 2,4,6 
ans(y); //Output: 2,4,6undefinedundefined