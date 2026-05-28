//Ganesh Code 
function login(order){ 
  order((addTocart)=>{
console.log("order function"); //Janani added this line
    addTocart((payment)=>{
console.log("addTocart function"); //Janani added this line
      payment((delivery)=>{
        console.log("payment function"); // Janani modified the message to understand.
      });
    });
  });
};
//Janani added the below calling code
//login(order);
//order(addToCart);
login((order) => {
order((addToCart)=> {
addToCart((payment) => {
payment((delivery) => {
});
});
});
});



// let login = (order) => {
//   order((addToCart) => {
//     console.log("Order Function");

//     addToCart((payment) => {
//       console.log("addToCart Function");

//       payment((delivery) => {
//         console.log("payment Function");

//         delivery(() => {
//           console.log("delivery Function");
//         });
//       });
//     });
//   });
// };

// // Calling login with fully nested callbacks
// login((order) => {
//   order((addToCart)=> {
//     addToCart((payment) => {
//       payment((delivery) => {
//         delivery();
//       });
//     });
//   });
// });




 
 
 