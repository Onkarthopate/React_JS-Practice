console.log("start");

code();
setTimeout(() => {
    console.log("SetTimeout Done ");
    
}, 3000);

fetch('https://dummyjson.com/products')
.then(function cb(){
    console.log("Execured API");
    
})

primice();

console.log("END");

async function code() {
    console.log("asunc function executed"); 
}
code()

function primice(){
    return new Promise((resolve, reject) => {
        console.log("Promice resolve ");
        
    })
}
