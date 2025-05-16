// let a= 10;
// for(let i=0 ; i<=a;i++){
//     console.log(i);
// }
// var a= 10;
// for(var i=0 ; i<=a;i++){
//     console.log(i);
// }


// for(let i=1;i<=5;i++){
//     let row ="";
//     for(let j=1;j<=5;j++){
//         row +="*"
//     }
//     console.log(row);  

// }

// for(let i=1;i<=5;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row += "*";       
//     }
//     console.log(row);
    
// }


// for(let i=5;i>0;i--){
//     let row ="";
//     for(let j=0;j<i;j++){
//         row +="*";
//     }
//     console.log(row);
    
// }

// let a=6;
// for(let i=1;i<=a;i++){
//     let letter = "";
//     for(let j=1;j<=i;j++){
//         letter += String.fromCharCode(64+j);
//     }
//     console.log(letter);
    
// }

// let a=6;
// for(let i=1;i<=a;i++){
//     let space = " ".repeat(a-i);
//     let letter = "";
//     for(let j=1;j<=i;j++){
//         letter += String.fromCharCode(64+j);
//     }
//     console.log(space+letter);
    
// }


 
// let a = 5;
// for (let i = 1; i <= a; i++) {
//     let space = " ".repeat(a - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(space + stars);
// }   
// for (let i = a-1; i >= 1; i--) {
//     let space = " ".repeat(a - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(space + stars);
// } 

// function binaryTraingle(n){
   
//     for (let i=0;i<n;i++){
//         let row = "";
//         let num =0;
//         for(let j=0;j<=i;j++){
//             row += num +" ";
//         }

//             console.log(row.trim());

//     }
        

// }

// binaryTraingle(5);


// function printPattern(N) {
//     let result = "";
//     for (let i = 1; i <= N; i++) {
//         if (i === 6) {
//             result += "* ";
//         } else if (i >= 7 && i <= 10) {
//             result += "* ";
//         } else if (i >= N - 1 && N >= 16) {  
//             result += "* ";
//         } else {
//             result += i + " ";
//         }
//     }
//     console.log(result.trim());
// }


// printPattern(8);


// let n = 8;

// for(let i=0;i<=n;i++){
//     if(i%2 != 0){
//         console.log(i);
        
//     }
// }