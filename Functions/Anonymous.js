// defined where they need , 
// this function is only need once.

const btn = document.getElementById('submit');
btn.addEventListener("click", ()=>{
    const name = document.getElementById("text").value;
    alert(`Hello ${name}`);
});
