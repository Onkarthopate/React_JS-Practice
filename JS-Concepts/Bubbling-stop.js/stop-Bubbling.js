document.getElementsByClassName("Container")[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Conatiner Clicked");
    
})

document.getElementsByClassName("Main-Container")[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Main-Conatiner Clicked");
    
})
document.getElementsByClassName("Grand-parent-container")[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Grand-parent-conatiner Clicked");
    
})

document.getElementsByClassName("parent-container")[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent-conatiner Clicked");
    
})
document.getElementsByClassName("child-container")[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child-conatiner Clicked");
    
})
