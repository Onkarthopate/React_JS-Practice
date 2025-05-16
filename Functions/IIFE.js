// (function (){
//     console.log("IIFE executed");
    
// })();

// (function myName(a){
//     console.log("IIFE executed, My name is :" , a);
    
// })("Omkara");


(()=>{
    console.log("Arrow IIFE Executed");
    
})


const sum = ((a,b)=>{
    console.log("Arrow IIFE Executed : ", a+b);
    
})(7,9);

((a,b)=>{
    console.log("Arrow IIFE Executed : ", a%b);
    
})(7,9)