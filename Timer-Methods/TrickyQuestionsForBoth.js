// function start() {
//   setInterval(() => {
//     console.log("Running...");
//   }, 0);
// }
// start();


// function start() {
//   setTimeout(() => {
//     console.log("Running...");
//   }, 0);
// }
// start();


// const id = setTimeout(() => {
//   console.log("Will this run?");
// }, 2000);

// clearTimeout(id);

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("Sync code");

// let count = 0;
// const id = setInterval(() => {
//   console.log("Count:", count);
//   if (count++ === 3) clearInterval(id);
// }, 1000);




// let id = setInterval(() => {
//   console.log("Ping!");

// }, 1000);

// setTimeout(() => {
//     clearInterval(id);
// }, 6000);




setTimeout(() => console.log("1"), 1000);
setTimeout(() => console.log("2"), 0);
console.log("3");
