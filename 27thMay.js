 

fetch("https://reqres.in/api/users/2", {

  method: "GET",

  headers: {

    "x-api-key": "reqres-free-v1"

  }

})

  .then((response) => {

    console.log("Status Code:", response.status);
 
    if (response.status !== 200) {

      throw new Error("API failed");

    }
 
    return response.json();

  })

  .then((data) => {

    console.log("Response:", data);
 
    if (data.data.first_name === "Janet") {

      console.log("API validation passed");

    } else {

      console.log("API validation failed");

    }

  })

  .catch((error) => {

    console.log("Error:", error.message);

  });
 
 





  async function name (){

    try{

      await ()=>consloe.log("");

      pause();

      await ()=>consloe.log("");

    }

    catch(error){

      consloe.log(error))

    }

    finally(()=>gvhvuj);

    finally{

      ()=>gvhvuj

    }

  }
 
 
 
  

 
 










 