const greet = (Name,callback)=>{
    setTimeout(() => {
        console.log(`Hello ${Name}`);
        callback(Name);
    }, 1000);
}

const ageofThePerson =(Name , callback)=>{
    setTimeout(() => {
        const age = 23;
        console.log(`My Name is ${Name} and age is ${age}`);
        callback(age , Name);
        
    }, 2000);
}

const infoPerson = (age , Name)=>{
    setTimeout(() => {
        const info = {
          Subject : {
            Math : 34,
            Science:23,
            Marathi:40
          } 
        }

        console.log(info);

        console.log(`${Name} , ${age}, ${JSON.stringify(info)}`);
        
        
    }, 3000);
}

greet("Omkar Thopate",(Name)=>{
    ageofThePerson(Name , (age,Name)=>{
        infoPerson(age,Name)
    })
})