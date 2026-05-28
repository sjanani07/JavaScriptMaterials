
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login successful");
      resolve("token123");
    }, 1000);
  });
}

function addToCart(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Item added to cart");
      resolve("cart123");
    }, 1000);
  });
}

function payment(cartId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment done");
      resolve("order123");
    }, 1000);
  });
}

// Chaining
login()
  .then((token) => addToCart(token))
  .then((cartId) => payment(cartId))
  .then((orderId) => console.log("Order completed:", orderId))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Flow Finished"));
