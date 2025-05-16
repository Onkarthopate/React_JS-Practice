// function hello(name, callback) {
//    console.log(`Hello  ${name}`);
//    callback();
// }

// function hi() {
//     console.log("THopate");
// }

// hello("Omkara", hi);


function hello(name, callback) {
  let greeting = `${name} , ${callback()} `;
  return `${greeting}`;
}

function hi() {
    return "Thopate";
}

console.log(hello("Omkara", hi));
