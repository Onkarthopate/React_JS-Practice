// reverse String 

//  1)

// let str = "Nimap_Infotech";
// let reverse = "";

// for(let i=str.length-1;i>=1;i--){
//     reverse += str[i];
// }
// console.log(reverse);   // TC : 0(n)

// 2)

// let str = "Nimap_Infotech";
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// ==============================================================

// check given String is palindromic or not


// let str1 = "aYahAya";
// let reverse = "";

// let str = str1.toLocaleLowerCase();

// for(let i=str.length-1;i>=0;i--){
//     reverse += str[i];
// }
// console.log(reverse);

// if(reverse == str){
//     console.log(reverse , " IS Palindromic String ");
    
// }else{
//     console.log(reverse, " Is Not Palidromic String");
    
// }

// ====================================================================

// anagram or not

// let str1 = "listen";
// let str2 = "silent";

// console.log(checkAnagram(str1,str2));

// function checkAnagram(str1,str2){

//     if(str1.length  !== str2.length) return false;

//     let a1 = str1.split('').sort().join('');
//     let b1 = str2.split('').sort().join('');

//     return a1 === b1;
// }

// ========================================================================

// count lowercase upppercase letter in string

// let str1 = "TechNoleararN";
// let uppercase =0;
// let lowercase =0;

// for (let char of str1) {
//     let code = char.charCodeAt(0);

//     if(code > 64 && code <=90){
//         uppercase++;
//     }
//     else if(code >= 97 && code <= 122){
//         lowercase++;
//     }
// }

// console.log(uppercase);
// console.log(lowercase);

// ================================================= 

// let str = "Hello! Welcome to Nimap Infotech Company";

// let words = str.split(' ');  
// let longest = "";

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }

// console.log("Longest word:", longest);

// =========================================================


//  let str = "Hello Welcome to Nimap Infotech Company";
// console.log(str.split(" ").map(w => w.split("").reverse().join("")).join(" "));


let str = "Hello Welcome to Nimap Infotech Company".toLowerCase();

let vowels = 0;
let consonants = 0;
const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

for (let ch of str) {
  if (ch >= 'a' && ch <= 'z') {
    if (vowelsSet.has(ch)) vowels++;
    else consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);