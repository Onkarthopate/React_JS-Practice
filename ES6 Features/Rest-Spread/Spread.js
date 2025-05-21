// let arr = [34,23,55];

// let arr1 = [...arr]; //copying one arr to another arr

// console.log(arr1);

// ---------------------------------------------------------------------

// let arr1 = [2,3,4];
// let arr2 = [5,6,7];
 
// let arr3 = [...arr1,...arr2] //merging two array
// console.log(arr3);

// ---------------------------------------------------------------------


// const nums = [5, 10, 1];
// console.log(Math.max(...nums)); //10

// ---------------------------------------------------------------------

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const baseArgs = [2, 3];
// console.log(multiply(...baseArgs,4)); 

// ---------------------------------------------------------------------

// function add(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(add(...numbers)); 

// ---------------------------------------------------------------------

// let obj1 ={
//     a:12,
//     b:"JOHN"
// }

// let obj2 = {...obj1};
// console.log(obj2);

// ---------------------------------------------------------------------

function greet({ name, age }) {
  return `Hello ${name}, you are ${age} years old.`;
}

const person = { name: "Alice", age: 30 };
console.log(greet({ ...person }));

// ---------------------------------------------------------------------

