
// function name1(a,b) {
//   let a = py.intercept("https://www.facbook.com")
//   .response().gender[1];
//   console.log("name1 callback");
//   return a;
// }

// function original(callback) {
//   console.log("original function");
//   callback(7,8);
//   enter(a);
// }


// original(name1);

let values = [1,2,3,4];
async function name2(){
  values.forEach(value=>console.log(value)); // for each -> array and string
//for in only return index of array not a value // for in -> object iteration (to get only Key)
  for(value in values){
    console.log(value)}
}
//name2();

let obj = {
  name: "javascript",
  age: 40
}

//console.log(obj.name);

for(let key in obj){
  console.log(key);
  console.log(obj[key]);
}