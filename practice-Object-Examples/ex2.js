// let a = {x:1};  
// let b = a;  
// b.x = 2;  
// console.log(a.x);
// console.log(b.x);

// let a = {x:1};  
// let b = {...a};  
// b.x = 5;  
// console.log(a.x);
// console.log(b.x);   

// Object.freeze({ a: 1 }).a = 5;

// const obj = { 3: 'c', 1: 'a', 2: 'b' };  
// console.log(Object.values(obj));

let a = {};  
console.log(a);

let b = { a };  
console.log(b);

a.b = b; 
console.log(a);
console.log(b);

console.log(a.b.a.b.a === a);
