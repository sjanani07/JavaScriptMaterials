  async function api (){
await fetch ("https://api.restful-api.dev/objects", {
  method: "GET"
})
  .then((resolve) => {
 
// status code - 200
// status line - ok
// response time - milliseconds
// response body
//response header
// cookies
     console.log("Status Code:", resolve.status)
    // console.log(resolve.json)
  })
  // .then((data) => {
  //   console.log("Response:", data);
  // })
  .catch((error) => {
    console.log("Error:", error.message);
  }
);}
 
  function name(){
 
    console.log("js");
  }
  
  api();
  name();
 