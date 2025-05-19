// Square Pattern 

// function SquarePattern(n){

//     for(let i=1;i<=n;i++){
//         let row = "";
//         for(let j=1;j<=n;j++){
//             row += "*";
//         }
//         console.log(row);

//     }  

// }

// SquarePattern(5);

// ===========================================================================

// Right Angle Traingle Pattern

// function RAT(n){

//     for(let i=1;i<=n;i++){
//        let row = "";
//         for(let j=1;j<=i;j++){
//             row += "*";
//         }
//         console.log(row);

//     }  
// }

// RAT(5);

// ===========================================================================

// Inverse Right Angle Triangle

// function IRAT(n){
//     for(let i=n;i>=1;i--){
//         let row = "";
//         for(let j=1;j<=i;j++){
//             row += "*";
//         }
//         console.log(row);

//     }
// }
// IRAT(5);

// ===========================================================================

// Equilatral Triangle

// function equiatralTraingle(n){

//     for(let i=1;i<=n;i++){
//         let star = "";
//         let space ="";
//       for(let j=1;j<=n-i;j++){
//         space += ".";
//       }
//       for(let k = 1;k<= 2*i-1;k++){
//         star += "*"
//       }
//       console.log(space+star);
//     }
// }
// equiatralTraingle(5);

// ===============================================================================

// Dimoand Pattern 

// function equiatralTraingle(n) {

//     for (let i = 1; i <= n; i++) {
//         let star = "";
//         let space = "";
//         for (let j = 1; j <= n - i; j++) {
//             space += ".";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             star += "*"
//         }
//         console.log(space + star);
//     }
//     for (let i = n-1; i >= 1; i--) {
//         let star = "";
//         let space = "";
//         for (let j = 1; j <= n - i; j++) {
//             space += ".";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             star += "*"
//         }
//         console.log(space + star);
//     }
// }
// equiatralTraingle(5);

// ==============================================================================

// Right aligned triangle

// function RRAT(n){
//     for(let i = 1; i <= n; i++){
//         let space = "";
//         let star = "";
//         for(let j = 1; j <= n - i; j++){
//             space += " "; 
//         }
//         for(let j = 1; j <= i; j++){
//             star += "*";
//         }
//         console.log(space + star);
//     }
// }

// RRAT(5);

// =====================================================================

// Inverse of Right aligned triangle

// function IRRAT(n){

//     for(let i=n; i>= 1;i--){
//         let space="";
//         let star = "";

//         for(let j=1;j<=n-i;j++){
//             space += " ";

//         }
//         for(let j=1;j<=i;j++){
//             star += "*"
//         }
//         console.log(space + star);
        
//     }
// }

// IRRAT(5);

// ================================================================================

// for charactor a-z

// function CharPrint(n){

//     for(let i=1;i<=n;i++){
//         let row ="";
//         for(let j=1;j<=i;j++){  
//             row += String.fromCharCode(64+ j);
//         }

//         console.log(row);
        
//     }
// }
// CharPrint(7);


// ===================================================================

// ABC increment

// function CharCount(n){

//     let count = 65;

//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += String.fromCharCode(count++);
//         }
//         console.log(row);
//     }
// }
// CharCount(6);

// ============================================================

