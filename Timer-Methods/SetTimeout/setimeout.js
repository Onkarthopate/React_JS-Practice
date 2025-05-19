// normal set-timeout

// setTimeout(() => {
//     console.log("This is normal setTimout!");
    
// }, 2000);


// ===========================================================================

// settimeout inside a function

// function Greet(){
//     setTimeout(() => {
//         console.log("setTimeout Inside a Function..");
        
//     }, 3000);
// }
// Greet();

// ========================================================================

// settimeut with parameters

// function sayHello(name,age){
//     setTimeout(() => {
//         console.log(`Hello ${name} having age is ${age}`);
         
//     }, 4000);
// }
// sayHello("Alice" , 23);

// ==========================================================================

// settimeut with parameters use callback

//  You cannot use return inside setTimeout
//   to return a value from the parent function. ---so use callback instead of this 

// function sayHello(name,age , callback){
//     setTimeout(() => {
//         callback(`Hello ${name} having age is ${age}`);
         
//     }, 4000);
// }
// sayHello("Alice" , 23 , (m)=>{
//     console.log(m);
    
// });

// ==================================================================

// By use promises and async function 

// function sayHello(name, age) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Hello ${name}, having age is ${age}`);
//         }, 4000);
//     });
// }

// async function run() {
//     const message = await sayHello("Alice", 23);
//     console.log(message); 
// }

// run();

// ================================================================

// ClearInterval

// const TimeoutID = setTimeout(() => {
//         console.log("After 2 Sec ");
        
//     }, 2000);

// clearTimeout(TimeoutID);

// ================================================


// Settimeoutin arrow function

const TimeoutID = (()=>{
    const id = setTimeout(() => {
        console.log("After 2 Sec ");
        
    }, 2000);

    return id;
})

const timmer = TimeoutID();

clearTimeout(timmer);