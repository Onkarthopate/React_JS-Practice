// const getUser = (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User Name:", name, "Age is:", age);
//       resolve({ name, age });
//     }, 1000);
//   });
// };

// const getPost = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetched Posts");
//       resolve([
//         { id: 1, post: "Post 1" },
//         { id: 2, post: "Post 2" },
//         { id: 3, post: "Post 3" },
//       ]);
//     }, 2000);
//   });
// };

// getUser("omkar", 23)
//   .then(user => {
//     return getPost(user.name); 
//   })
//   .then(posts => {
//     console.log("Posts:", posts);
//   })
//   .catch(error => {
//     console.error("Error occurred:", error);
//   });



function fetchData() {
  console.log("fetching Data...\n===================");

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Fail To Fetch Data");
      }
      return response.json(); 
    })
    .then(result => {
      console.log("Product Data", result);
    })
    .catch(error => {
      console.log("Fail to fetching Data!", error);
    });
}

fetchData();




