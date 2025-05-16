// function swapTwoVariable(a,b){

//     var a = a+b;
//     var b = a-b;
//     var a = a-b;

//      console.log("a ", a);
//      console.log("b ",b);    
// }
// swapTwoVariable(23,49);

function swapTwoVariable(a,b){

var temp = a;
 a= b ;
 b= temp;

 return [a,b];

}
console.log(swapTwoVariable(5,7));


