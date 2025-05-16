// function tricky() {
//   var x = 5;
//   return function () {
//     console.log(x); 
//     var x = 10;
//   };

// }
// tricky()(); //undefined

console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

 
async function fun1(){
console.log('D');
  await null;
  console.log('E');

}

fun1();


console.log('F');
