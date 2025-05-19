// normal setInterval

// setInterval(() => {
//     console.log("You are in setInterval..");
// }, 2000);     we need to stop manually if want to terminate

// ===========================================================================

// setInterval in function

// function helloWorld(){
//     let count =0;
//     setInterval(() => {
//         console.log("Hello from setInterval.." , ++count);

//     }, 2000);
// }
// helloWorld();

// ===========================================================

// setInterval with parameter 

// function Greet(name , age){
//     setInterval(()=>{
//         console.log(`${name} and ${age}`);

//     },2000);
//     return Id;
// }
// Greet("Alice",32);

// ================================================================

// setInterval and stopInterval

// function Info(name , age , role){
//     let ID = setInterval(() => {
//         console.log(`My name is ${name} having age ${age} and my role is ${role}`);

//     }, 2000);
//     return  ID;
// }

// const IntervalID = Info("Omkar", 23, "Software Developer");


// // clearInterval(IntervalID); 
// //we dont use this directly because clearInterval don't recognize when to clear it

// setTimeout(() => {
//     clearInterval(IntervalID);
//     console.log("Cleared SetInterval");

// }, 12000);


// =========================================================

// Do you need to use setTimeout() to stop a setInterval()?

// No — not always.
// setTimeout() is just one way u stop the interval, but it's not required. 
// You can stop setInterval() based on any condition or event

// let count = 0;
// const id = setInterval(() => {

//     console.log(`Count: ${++count}`);

//     if (count === 5) {
//         clearInterval(id);
//         console.log("Stopped after count reached 5");
//     }
// }, 1000);


// also click on button (event)

    <button onclick="stopInterval()">Stop</button>


  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  function stopInterval() {
    clearInterval(id);
    console.log("Stopped by user");
  }

