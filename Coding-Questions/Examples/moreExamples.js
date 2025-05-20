// let arr = [23,54,81,34,9,45,3,4,5,6,3,24,55,32];
// let max = -Infinity;
// // first maximum in array

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i] > max){
//         max = arr[i];
//     }

// }

// let secMax = -Infinity;

// for(let i =0;i<=arr.length;i++){
//     if(arr[i]<max && arr[i] > secMax){
//         secMax = arr[i];
//     }
// }


// let ThirdMax = -Infinity;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<secMax && arr[i] > ThirdMax){
//         ThirdMax = arr[i];
//     }
// }

// console.log("Maximum is " , max);
// console.log("Secound Maximum is " , secMax);
// console.log("Third Maximum is " , ThirdMax);

// =============================================================

// longest word in String

// let str = "Hello Welcome to Nimap Infotech Company";

// let word = str.split(" ");
// lonestWord= " ";

// for(let i=0;i< word.length;i++){
//     if(word[i].length > lonestWord.length ){

//         lonestWord = word[i];
//     }
// }

// console.log(lonestWord);

// ==========================================================

let str = "Hello Welcome to Nimap Infotech Company";
console.log(str.split(" ").map(w => w.split("").reverse().join("")).join(" "));
console.log(str);
