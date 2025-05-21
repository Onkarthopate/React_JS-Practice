// var fname = "omkara";
// var age = 23;

// if (true) {
//     var fname = "Sagar";
//     var age = 22; 

//     console.log(`Your name is ${fname} and age is ${age}`);

// }

// console.log(`Your name is ${fname} and age is ${age}`);
// That's Why we are using let , const instead of var.

// ========================================================================================

// let name = "omkara";
// let age = 23;

// if (true) {
//     let name = "Sagar";    //block scope
//     let age = 22;

//     console.log(`Your name is ${name} and age is ${age}`);

// }

// console.log(`Your name is ${name} and age is ${age}`);

// ====================================================================================

// const name = "omkara";
// const age = 23;

// if (true) {
//     const name = "Sagar"; //block scope
//     const age = 22;

//     console.log(`Your name is ${name} and age is ${age}`);

// }

// console.log(`Your name is ${name} and age is ${age}`);

// ========================================================================================

// Normal Functions

// var name = "Omkara";
// var age = 23;

// function info() {
//     console.log(`Your Name is :: ${name} age is ${age}`); // run but got undefined

//     var name = "Nishant";
//     var age = 33;
//     console.log(`Your Name is ::: ${name} age is ${age}`);

//     {
//         var name = "John Doe";
//         var age = 13;
//         console.log(`Your Name is :::: ${name} age is ${age}`);
//     }

//     console.log(`Your Name is ::::: ${name} age is ${age}`);

// }

// info();
// console.log(`Your Name is : ${name} age is ${age}`);
// info();

// ================================================================================

// let name = "Omkara";
// let age = 23;

// function info() {
//     // console.log(`Your Name is :: ${name} age is ${age}`);  error name not access before initialize

//     let name = "Nishant";
//     let age = 33;
//     console.log(`Your Name is ::: ${name} age is ${age}`);

//     {
//         let name = "John Doe";
//         let age = 13;
//         console.log(`Your Name is :::: ${name} age is ${age}`);
//     }

//     console.log(`Your Name is ::::: ${name} age is ${age}`);

// }

// info();
// console.log(`Your Name is : ${name} age is ${age}`);
// info();

// -====================================================================================


var name = "Omkara";
var age = 23;

function info() {
    console.log(`Your Name is :: ${name} age is ${age}`);  //error name not access before initialize

    var name = "Nishant";
    var age = 33;
    console.log(`Your Name is ::: ${name} age is ${age}`);

    {
        const name = "John Doe";
        const age = 13;
        console.log(`Your Name is :::: ${name} age is ${age}`);
    }

    console.log(`Your Name is ::::: ${name} age is ${age}`);

}

info();
console.log(`Your Name is : ${name} age is ${age}`);
info();

