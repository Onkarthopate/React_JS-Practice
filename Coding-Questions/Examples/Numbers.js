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

let n = 4;
let sumOfSquares = 0;
for(let i=0;i<= n ;i++){
    if(isPrime(i)){
        console.log(i);
       sumOfSquares += i * i;
    } 
}

console.log("Sum of Square is : ", sumOfSquares);




function isPrime(n){

    if(n <= 1) return false;
    
for(let i=2 ; i<= Math.sqrt(n);i++){

    if( n % i ===0){

        return false
    }
}
return true;
}