function* myGenerator() {
    yield "Hello";
    yield "World";
    yield "!";
    yield "?";
}

const gen = myGenerator(); // Create generator instance

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().done); 
