// Map : 

// const arr = [4,6,8,10,12];

// let arr1 = arr.map(num => num * num);

// console.log(arr1);

// -------------------------------------------------------------------

// const arr = [4, 6, 8, 10, 12];

// let arr1 = arr.map(num => {
//   const square = num * num;
//   return square > 30 ? `square of ${num} is  Greater than 30` : `square of ${num} is Less than to 30`;
// });

// console.log(arr1);

//================================================================================

// Filter 

// let arr = [22,44,66,3434,.5555,88,45,33,56,89,55,333];

// let fiteredArray = arr.filter(num =>{
//     let lastDigit = num % 10;
//     num = Math.floor((num % 100)/10);
    
//     return num === lastDigit;
// })

// console.log(fiteredArray);

// =====================================================================

// Reduce 

// const arr = [4, 6, 8, 10, 12];

// //let reducedArray = arr.map(num =>{return num+2})  also works

// let reducedArray = arr.map(num =>  num+2).filter(num =>{
//     let graterNum = num >= 10 ;
//     return graterNum;
// }).reduce((acc , curr)=>acc+curr);

// console.log(reducedArray);
