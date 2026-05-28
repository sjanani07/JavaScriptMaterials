function conCat(a, b, c){
     console.log(a,b,c);
}
 
conCat(1,2,3);

let b = "bValue";
function rest(b,a="qa",...x){ //only 1 rest parameter(...x), and it should be defined at the end only.
    //console.log(b+","+a+","+x);
    console.log(b,a,x);
}

 rest(b,undefined,2,3,4,5); //bValue,qa,[1,2,3,4,5]



//  function rest(b, a="js"){ //only 1 rest parameter(...x), and it should be defined at the end only.
//     console.log(b+","+a);
// }
//  rest(b, undefined);