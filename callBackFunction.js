//call back function
 
//What all call be passed as arguements ?
//1.Object
//2.Spread operator
//3.Any primitive Datatype
//4.Array
//5.function  - call back function

// usecase-01
function name1(){
console.log('name1 callback');
}

function original(callback){
console.log("original");
//name1();
callback();
}

original(name1);

//setTimeout(function() {}, 10);

