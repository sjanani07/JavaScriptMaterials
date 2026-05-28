 //Object type variable
//Key : Value
//In java, json - Key will always be string and we have to use "", 
// but in JS - it understand by itself that key is string by default and we don't need double quotes for key.

// Modern API - Request and Response - easy to access&use- JSON format.
//JSON stands for JavaScript Object Notation.
//The below are JSON format structure. Key vale with in curly braces. The only difference is we use "" for defining key.

let obj = { //obj variable
  name:"online",
  age: 30,
  pass: 90.56,
  result:true,
  area:{ //nested obj variable
    location:"chennai",
    home:"thoraipakkam"
  },
  students:[
    {
      name:"ganesh",
      rollno: 9876,
      classname:"zoology"

    },
  {
    name:"kumar",
      rollno: 1234,
      classname:"maths"
    }
    ]

  }

  // Obj type variable used in class below:
 class className {
  showResult(){
    console.log(obj.result);
console.log(obj.area.home);
console.log(obj.students[1]);
console.log(obj.students[1].classname);
  }
  }
  let y = new className();
  y.showResult();

  // Using constructor
class ClassName {
  constructor(){
    console.log(obj.result);
    console.log(obj.area.home);
    console.log(obj.students[1]);
    console.log(obj.students[1].classname);
  }
}

new ClassName();

  
// console.log(obj.result);
// console.log(obj.area.home);
// console.log(obj.students[1]);
// console.log(obj.students[1].classname);

 // Obj type variable used in function below:
function objMethod(){
    console.log(obj.age);
}
objMethod();


