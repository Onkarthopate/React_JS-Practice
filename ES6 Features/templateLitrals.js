// const name = "Bob";
// const greeting = `Hello, ${name}!
// Welcome to ES6.`;
// console.log(greeting);


function multiLineMessage(user, items) {
  return `
    Hello ${user},
    You have ${items.length} new messages.
    Thank you!
  `;
}
console.log(multiLineMessage("Bob", [1, 2, 3]));
