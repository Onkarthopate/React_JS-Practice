// arrow functions work with only function expression

const add = (a,b)=>{
    return a+b;
}
console.log(add(4,5));


const square = x => x*x;
console.log(square(7));

const name = (a)=>{
    return ("Hello " + a);
}
console.log(name("omkara"));
