const arr  = [ 2 , "omkara" , subject = {sub1 : 'maths' , sub2: 'english' , sub3:'science'} ];

console.log(arr);


// const arr1 = [...arr];
const arr1 = Object.assign(arr);

// arr1.push(true);
// console.log(arr1);
// console.log(arr);


// // arr1[2].sub4 = "Physics";
arr1[2]['sub3'] = "Social-Science";
console.log(arr1);
console.log(arr);



// const obj = {
//     name : 'Omkara',
//     age : 23,
//     marks : [100, 300,200],
//     subject : {sub1 : 'math', sub2 : 'science' , sub3:'physics' , sub4 : [100 , 'Biology']},
// }

// console.log(obj);
// // console.log(typeof(obj1));
// // console.log(typeof(Object));
// console.log("-----------------------------");

// // console.log(obj1.name);
// // console.log(obj1.age);
// // console.log(obj1.marks);
// // console.log(obj1.subject);

// const obj1 = {...obj}

// // console.log(obj);
// // console.log(obj1);

// // obj.age=56;
// // console.log(obj1);
// // console.log(obj);


// // obj1.marks[3] = 400;
// // console.log(obj1);
// // console.log(obj);

// // obj1.subject.sub5 = "History";
// // console.log(obj1);
// // console.log(obj);

// obj1.subject['sub4'][6]= 'Omkara';
// console.log(obj);
// console.log(obj1);


