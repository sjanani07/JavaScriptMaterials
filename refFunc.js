let a = {
    langName: "Java",
    age: 20
}

let b ={
    langName: "Python",
    age: 30
}

let x = 5;

function name1(x){ //so, x is called as reference variable
    console.log(x.langName);
}
name1(b);
