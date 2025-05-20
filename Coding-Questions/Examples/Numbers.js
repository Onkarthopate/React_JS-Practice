// recursion normal 

// let n = 7;

// let a= 0;
// let b= 1;

// console.log(a);
// console.log(b);

// for(let i=2;i<n;i++){
//     let c = a+b;
//     console.log(c);

//     a=b;
//     b= c;

// }

// ===========================================================================

// find even number in given array based on array length

// let arr = [12,6, 45, 32, 31, 40, 67,78,99];
// let n = arr.length;

// for (let i = 0; i <=n-1; i++) {

//     if (n % 2 === 0) {

//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);   //even number 
//         }
//     }

//     else {

//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);    //Odd Number

//         }
//     }

// }

// ============================================================================

// revsere number 

// let n = 34567;
// let reverse = 0;

// while (n > 0) {

//     let lastDigit = n % 10;

//     reverse = reverse * 10 + lastDigit;
//     n = Math.floor(n/10) ;

// }

// console.log(reverse);

// ======================================================================

// find prime number between range

// let end = 30;
// let start = 1;

// for (let i = start; i <= end; i++) {

//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;

// }

// ======================================================================

//Check Palindrome or not

// function PalindromeOrNot(n){

//     let original = n;
//     while(n > 0 ){
//         let lastDigit = n % 10;
//         rev = rev * 10 + lastDigit;
//         n = Math.floor(n/10);
//     }

//     if(rev == original){
//         console.log(original , " is palindromic Number ");

//     }
//     else{
//         console.log(original , " is not Palindromic number ");

//     }
// }

// let rev = "";
// PalindromeOrNot(3456543);

// ===========================================================================

// swap use third variable

// let a = 23;
// let b = 67;

// console.log('a : ',a , " , ", "b ", b);

// let temp = a ;
// a = b;
// b= temp;

// console.log('a : ',a , " , ", "b ", b);

// ===========================================================================


// Swap without third variable

// let a = 23;
// let b = 67;

// console.log('a : ',a , " , ", "b ", b);

// a = a+b;
// b = a-b;
// a = a-b;

// console.log('a : ',a , " , ", "b ", b);


// ===========================================================================

// Sum of square of n prime number

// let sumOfSqOfPrime = 0;
// primeNumber(10);
// console.log(sumOfSqOfPrime);


// function primeNumber(n){
//     for(let i=2;i<=n;i++){
//         if(isPrime(i)){
//             sumOfSqOfPrime += i*i;         
//         }        
//     }
// }

// function isPrime(n){

//     if(n <= 1) return false;
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if( n % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// ===========================================================================

// Find duplicate in array  

// let arr = [2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2,];

// let duplicate = [];

//     for (let i = 0; i <= arr.length - 1; i++) {
//         for (let j = i + 1; j <= arr.length - 1; j++) {
//             if (arr[i] === arr[j]) {
//                 duplicate.push(arr[i]);
//                 break;
//             }
//         }
//     }

// console.log(duplicate);   // time complexity 0(n^2) so use hash set 

// let freq = {};
// for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
// }
// let duplicates = [];
// for (let key in freq) {
//     if (freq[key] > 1) duplicates.push(Number(key));
// }
// console.log(duplicates);

// =========================================================


// let arr1 = [2, 3, 4, 5, 2, 3, 4, 5, 2, 3,45, 4, 5, 2];

// let uniqueArr = [...new Set(arr1)];

// console.log(uniqueArr); 

// ==============================================================


let arr = [80, 20, 10, 90, 40, 60, 50, 50];
let AllPairs = [];

function sumOfPairs(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i] + arr[j]) === 100){
                AllPairs.push([arr[i],arr[j]]);
            }
        }
    }

    return AllPairs;
}

console.log(sumOfPairs(arr));





