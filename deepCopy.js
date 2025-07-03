const arr  = [ 2 , "omkara" , subject = {sub1 : 'maths' , sub2: 'english' , sub3:'science'} ];

// const arr1 = structuredClone(arr);
const arr1 = JSON.parse(JSON.stringify(arr));

console.log(arr1);

console.log('-------------------------------------------------------------------------------------');

arr1[3] = "Maharastra";
console.log(arr1);
console.log(arr);

console.log('-------------------------------------------------------------------------------------');


arr1[2]['sub4']='history';
console.log(arr1);
console.log(arr);
