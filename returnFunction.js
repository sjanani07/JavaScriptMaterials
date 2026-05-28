// function name1(a,b){
//     let c = a+b;
//     return c;
// }

// function name2(){
//     let z = name1(5,2);
//     let w = z+10;
//     console.log("z: "+z);
//     console.log("w: "+w);
// }

// name2();

// function outer(){
//     console.log("outter fn");
//     return ()=> console.log("inner fn");
// }
// outer();

function func(a,b){
    let c = a+b;
    console.log("func "+c);

    return ()=>{
        let y =4+7;
        console.log("arrow "+y);
    return y;    
    }
}

let u = function main(){
    let y =func(2,3)();
    //console.log(y);
}
u();

// function outer(){
//     console.log("outter fn");
//     return function inner(){
//         console.log("inner fn");
//     }
// }
// outer()();

