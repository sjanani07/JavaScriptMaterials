let a ={
  name:"java", // api
  age:25,
  mobile: 76799,
  address: "yyy"
}

function name2(name='js'){
   console.log(name);
}
name2('phython');

function name3(x){ // x is the reference variable here. And we did not define this anywhere.
  console.log(x.Location);
  console.log(x);
}

name3(a); // Pass any arugement. Example object a.
name3({ // Object override
  name:"api", // api
   age:25,
   mobile: 111111
});
name3({
    age:30
})

name3(a);

// //type 1 override 
// name3({
//     name:"java",
//   age:25,
//   mobile: 6666,
//   address: "yyy"
// })

// //type 2 override 
// name3({ //kind of patch request in api (Existing value one or two component - updating)
//   name:"C#",
//   age:40,
//   })

//   //type 3 override 
// name3({ //kind of put request in api (additional resources are added)
//     name:"DotNet",
//   age:60,
//   mobile: "09876", //Always define mobile in String - Standard in JS. Regarding Octal - Need to check.
//   address: "ZZZ",
//   Location: "KK Nagar"
// })



