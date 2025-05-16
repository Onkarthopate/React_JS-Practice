// function outer(){
//  var a = "omkar";
//  function inner(){
//     var b = "Thopate";
//     console.log(a+" "+b);
    
//  }
//  return inner;
// }

// outer()();


// function outer(){
//  var a = "omkar";
//  function inner(){
//     var b = "Thopate";
//     console.log(a+" "+b);
    
//  }
//  return inner;
// }

// const result = outer()
// result();



// function outer(){
//  var a = "omkar";
//  return function (){
//     var b = "Thopate";
//     console.log(a+" "+b);
    
//  }
// }

// outer()();


   // const  outer = ()=>{
   // var a = "omkar";
   // inner = ()=>{
   //    var b = "Thopate";
   //    console.log(a+" "+b);
      
   // }
   // return inner;
   // }

   // // outer()();
   // const result = outer();
   // result();

      
      const outer = (function (){
         let a1= 34;
         return function(){
            console.log(a1);
            
         }
      });
      outer()();