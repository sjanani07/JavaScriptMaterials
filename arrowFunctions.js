//Arrow Functions

let x = () =>
{
    console.log("This is arrow function");
}

let y = (a,b) =>
{
    console.log("Arrow function with params");
}

let z = (a,b) =>
{
    return a+b;
}
console.log(z(5,3));

//To define one line code with return
let v = (a,b) => a+b;

let w = (a,b) => console.log("Single line definition");

// Returning objects
const createUser = (name, age) => ({ name, age });

console.log(createUser("Alice", 25));