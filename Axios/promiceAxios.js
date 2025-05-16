import axios from "axios";

function fetchData() {
  console.log("fetching Data...\n===================");

  axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      console.log("Product Data", response.data);
    })
    .catch(error => {
      console.log("Fail to fetching Data!", error.message);
    });
}

fetchData();