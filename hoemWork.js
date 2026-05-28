
let b = (order)=> { 
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

b((order) => {
    order((addTocart)=>{

    })
});




// let a = () => { console.log("arrow fn")};
// a();

