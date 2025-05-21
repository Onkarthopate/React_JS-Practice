// Normal Functions 

// NormalFunction();

// function NormalFunction(){
//     let a = 23;
//     let b = 34;

//     let c = a+b ;

//     console.log(c);

// }


// =====================================================================

// console.log(NormalFunction(23,45));


// function NormalFunction(a,b){
//    return a+b;

// }

// =====================================================================

// NormalFunction(23,45);

// function NormalFunction(a,b){
//     console.log(a+b);

// }

// ========================================================================

// // IIFE : 
// (function NormalFunction(a,b){
//     console.log(a+b);
// })(23,45);

// ========================================================================


// Function Expression

// FunctionExpression(23,45); //Cannot access 'FunctionExpression' before initialization

// const  FunctionExpression = function(a,b){
//     console.log(a+b);
// }
// FunctionExpression(23,45);

// -------------------------------------------------

// const FunctionExpression = (function (a, b) {
//     // console.log(a + b);

//     return a + b;

// })(23, 45);

// console.log(FunctionExpression); // undefined cannot need this when use log for result but need when return value

// ================================================================================================================
// ================================================================================================================

// Arrow Functions  //cannot hoisted

// (()=>{    //IIFE
//     console.log("This is from Arrow Function");
    
// })();

// --------------------------------------------------------------------------

// 1) way 

// const add = (a,b) => {
//     return a+b;
// };
// let result = add(2,4);
// console.log(result);

// 2) way

// const add =(a,b) => a+b;
// console.log(add(4,5));

// ----------------------------------------------------------------------------------

// const squareNum = a => a*a;
// console.log(squareNum(9));

// ----------------------------------------------------------------------------------

// const swapNumbers = ()=>{
//       let a=23;
//       let b=45;

//       a = a+b;
//       b = a-b;
//       a = a-b;

//     //   return [a , b]; //return both as arrays element
//       return {a , b}; // return both as object

// }

// let result = swapNumbers();
// console.log(result);

// ======================================================================================
// ======================================================================================

