let leafChild = document.querySelector(".leafChild-container");

leafChild.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("leafChild Trigered");
});



let innerChild = document.querySelector(".innerChild-container");

innerChild.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("innerChild Triggered");
})



let Child = document.querySelector(".Child-container");

Child.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Child Triggered");
})

// we are applying stopPropagation on Child , InnerChild , leafChild see the output and check 
// when click on parent see output then you know difference why we use e.stopPropagation .

let Parent = document.querySelector(".Parent-container");

Parent.addEventListener("click", ()=>{
    console.log("Parent Trigered");
})


let Main = document.querySelector(".Main-container");

Main.addEventListener("click", ()=>{
    console.log("Main Trigered");
})

