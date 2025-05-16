const fetchData = async ()=>{
    try{
        console.log("fetching Data...\n ===================");

      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if(!response.ok){
        throw new Error("Fail To Featch Data");
      }
      const result = await response.json();
      console.log("Product Data", result);

    }catch(error){
        console.log("Fail to featching Data!",error);
        
    }
}

fetchData();