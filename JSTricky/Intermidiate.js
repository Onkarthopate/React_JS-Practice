// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log('var:', i);
//   }, 100);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => {
//     console.log('let:', j);
//   }, 100);
// }


// function makeCounter() {
//   let count = 0;
//   return function () {
//         console.log('count:', count);

//     count++;
//     console.log('count:', count);
//   };
// }

// const counter = makeCounter();
// counter(); 
// counter()


// (function () {
//   try {
//     throw new Error();
//   } catch (e) {
//     var e = 42;
//     console.log('Inside catch:', e);
//   }
//   console.log('Outside catch:', e);
// })();

console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {      
  console.log('promise');
});

console.log('end');
