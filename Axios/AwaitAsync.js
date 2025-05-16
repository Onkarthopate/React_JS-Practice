import axios from "axios";

const fetchData = async ()=>{
    try{
        console.log("fetching Data...\n ===================");

      const response = await axios("https://jsonplaceholder.typicode.com/users/1");

      const result = await response;
      console.log("Product Data", result);

    }catch(error){
        console.log("Fail to featching Data!",error);
        
    }
}

fetchData();