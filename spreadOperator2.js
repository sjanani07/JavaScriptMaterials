// // Spread operator

// // to spreads the collection of data

// // collection of data  - array,object,string
 
 
// // Array iterables

let a = [1,2,3];  // iterable component
// console.log(a)
 
// let b =a;
// console.log(b)
 
let c = [...a]  // using spread operator
// console.log(c);

// If you want to add some additional values to the array 'a', the using spread operator we can do as below:
let d =[...a,4,5,6] // 1,2,3,4,5,6
//console.log(d);

// // Converting the variable 'd' spread operator concept to for loop
// //let a = [1, 2, 3]; already variable a is declared above.
// let e = [];
// // copy elements from a to e
// for (let i = 0; i < a.length; i++) {
//   e.push(a[i]);
// }
// // add additional values
// e.push(4);
// e.push(5);
// e.push(6);
// console.log(e); // [1,2,3,4,5,6] 
// When we concat using string, the array elements is stored in memory as string and displays Output as 1,2,3,4,5,6.
 
let f =d.concat(a,c,7,8,9); // array //concat is a method, so we use () brackets
//console.log(f);
 
let g = [...d,...a,...c,7,8,9];
//console.log(g);

//let a = [1,2,3]; 
// function name (...rests){ //rest param - rest operator used.
//   let a = 0; //local variable (shadows global a)
//   rests.forEach(rest => a=rest+a) //0=1+0 = 1 , 1 =2+1 = 3, 3=3+3 = 6, 6=4+6 = 10, finally a=10 now
//   console.log(a);  //a=10 
//  }
// name(...a,4); //spread operator used.

 // 28th April 2026

 let x =[1,2,3,4,5];
function name (...rests){
  //let x = 0; 
  rests.forEach(rest => console.log(rest))  
  rests.forEach(rest => x=rest+x)  
  console.log(x); 
}
name(...x,4);