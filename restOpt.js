function func2(){  
let a =[1,3,5,7];  //Index Based = 0,1,2,3 //Length =4 (count based)
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]); }
// func2();
//forloop
for(i=0;i<a.length;i++){ //i= (i)3+1 = 4
  console.log(a[i]);
}
}
func2();
 
function func3(...values){ 
console.log("Rest Operator: ")+console.log(values);
values.forEach((value)=> console.log(value));
}
func3(1,2,3,4,5,6);
 
 
 