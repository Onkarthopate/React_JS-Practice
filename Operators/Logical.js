let x = 3;

// logical AND
console.log((x < 5) && (x > 0));  // true
console.log((x < 5) && (x > 6));  // false

// logical OR
console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// logical NOT
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true