// // string 
// let str = "hello world!";
// let str1 = 'hello world!';
// let str2 = `     hello world!          `;

// console.log(str.length);
// console.log(str.concat(str1).concat(str2));
// console.log(str.charAt(4));
// console.log(str.indexOf('o'));
// console.log(str.includes("r"));
// console.log(str.includes("l"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.lastIndexOf("l"));
// console.log(str.slice(1 , 5));
// console.log(str.split(" "));
// console.log(str.replace("l","L"));
// console.log(str.replaceAll("l","L"));
// console.log(str.substring(1,3));
// console.log(str2.trim()); 
// console.log(Number('45'));
// console.log(typeof(Number('45')));

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

 

// Number
// let num = 45;
// let num1 = 34.566;
// let num2 = 34568765.87654321456

// console.log(num.toString());
// console.log(typeof(num.toString()));
// console.log(num1.toFixed(2));
// console.log(num.toExponential(2));
// console.log(num.toLocaleString(2));
// console.log(num.valueOf());

// console.log(num1.toPrecision(5)); //digit significant
// console.log(num2.toString (5));
// console.log(num2.toLocaleString(5)); //convert binary format


// Boolean
// let isBoolean = 34;
// let isBoolean1 = true;
// let isBoolean2 = false;

// console.log(Boolean(isBoolean1));
// console.log(Boolean(isBoolean2)); //output -false, when value 0 or false 

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



// Array
// let arr = [4,6.5678876,8,"omkara", true, 0 ,-12];
// let arr1 = ['Thopate', 5.0,NaN,undefined];
// let arr2=[];
// console.log(arr.concat(arr1));
// console.log(arr.copyWithin(arr2));
// console.log(arr.indexOf('omkara'));
// console.log(arr.length);
// console.log(arr.join(arr1)); //convert arr to string 
// console.log(arr.reverse());
// console.log(arr.slice(3,5));
// console.log(arr);

// console.log(arr.splice(3,5 , "Thopate",false));

// console.log(arr);

// console.log(arr.push(23));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// console.log(arr.shift(23));
// console.log(arr);

// console.log(arr.unshift(67));
// console.log(arr);

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



// object inside array

// let arr3 = [
//   34,
//   67,
//   rainbowColor = ["Yellow" , "red", "green"], 
//   information = {
//     name: "Omkara",
//     age: 23,
//   }
// ]

// console.log(arr3);

// console.log(arr3[3].age = 45);
// console.log(arr3);

// console.log(arr3[2][1]="Pink");
// console.log(arr3);

// console.log(typeof(arr3));
// console.log(typeof(arr3[2][1]));
// console.log(typeof(arr3[3].age));
// console.log(typeof(arr3[3].name));


// we can easily change the inner array and object inside arrays ;


// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



// Object

// Array inside objects

// let student = {
//     name:"omkara",
//     age:23,
//     subjects : [
//         {
//             Sub_Name : "Math",
//             Marks : 50,
//             OutOf : 50
//         },
//         {
//             Sub_Name : "Science",
//             Marks : 40,
//             OutOf : 50
//         },
//         {
//             Sub_Name : "Physics",
//             Marks : 32,
//             OutOf : 50
//         }
//     ],

//     location : {
//         Current :"Dadar",
//         Permanant : "Pune"
//     }
// }

// console.log(typeof{student});

// console.log(student);
// console.log(typeof(student.name));
// console.log(student.age);
// console.log(student.subjects);
// console.log(typeof(student.location.Current));
// console.log(typeof(student.subjects));
// console.log(typeof(student.subjects[2].Marks));
// console.log(typeof(student.subjects[2].Sub_Name));


// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



// let person = {
//     name:"Sagar",
//     age:22,
//     subject : ["math","science","Physics"],
// }


// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person)); //return an object in a format of array

// console.log(Object.freeze(person));
// console.log(person.name="Omkara");
// console.log(person.age=89);
// console.log(person.subject[3]="So-Science");
// console.log(person.subject[4]="Chemistry");
// console.log(person);

// console.log(Object.seal(person));
// console.log(person.name="Omkara");
// console.log(person.age=89);
// console.log(person.subject[3]="So-Science");
// console.log(person.subject[4]="Chemistry");
// console.log(person);

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


// function

// function PrintName(){
//     var a = 23;
//     var  name = "omkara";

//     function Inner(){
//         console.log(a);
//         a++;
//         console.log(a);
        
//         console.log(name);
        
        
//     }

//     Inner();
// }
// PrintName();


// function PrintName(){
//     var a = 23;
//     var  name = "omkara";

//     return function Inner(){
//         console.log(a);
//         a++;
//         console.log(a);
        
//         console.log(name);
        
        
//     }
// }
// PrintName()();

//another way to see output
// const result = PrintName();
// result();



// const  PrintName = ()=>{
//     var a = 23;
//     var  name = "omkara";

//     return  Inner = ()=>{
//         console.log(a);
//         a++;
//         console.log(a);
        
//         console.log(name);
        
        
//     }
// }
// PrintName()();


// -------------- **Method for Functions** ---------------------------

// const person = {
//   name: "Omkara",
// };

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }


// by call method
// greet.call(person, "Hello", "!");  

// by apply method
// greet.apply(person, ["Hi", "!!"]);  

// By bind method
// const greetOmkara = greet.bind(person);
// greetOmkara("Hey", "!!!");  


// -------------- **Method for Object** ---------------------------

// Call

let person1 = { name: "Sagar" };
let person2 = { name: "Omkara" };

function sayHi() {
  console.log("Hi, " + this.name);
}

sayHi.call(person1); // Hi, Sagar
sayHi.call(person2); // Hi, Omkara



    // Method	                    Use When...
   
    // call()	                    You want to call immediately and pass args one-by-one

    // apply()                    	You want to call immediately and have arguments in an array
    
    // bind()	                    You want to store or delay execution with bound this

