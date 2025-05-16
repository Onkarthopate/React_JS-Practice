function foo(name) {
    return new Promise((resolve, reject) => {
        console.log("My Name is :", name);
        resolve(name);
        // reject(Error);
    })
};

function info(name) {
    return new Promise((resolve, reject) => {
        console.log("Welcom to Our Company!", name);

        const information = {
            Age: 23,
            SkillSet: " Java , React , Node ",
        }
        console.log(information);
        resolve(information);
        // reject(  Error);

    })
}

function salaryExpectation(information) {
    return new Promise((resolve, reject) => {
        information.salaryExpectation = 20000;
        const Your_Role = "Manager";
        console.log(information, Your_Role);
        resolve({information, Your_Role});
        // reject(Error);

    })
}

function address({information, Your_Role}) {
    return new Promise((resolve, reject) => {
        information.currentAddress = "Mumbai , Dadar",
            information.PermentAddress = "Pune , Swargate",
            console.log(information);
        console.log(Your_Role);
        resolve();
    })
}

foo("John Doe")
    .then(info)
    .then(salaryExpectation)
    .then(address)
    .catch( function (error){
        console.log("Sometimg went wrong!", error);

    })


// Arrow Function

// foo("John Doe")
//     .then(info)
//     .then(salaryExpectation)
//     .then(address)
//     .catch((error)=>{
//         console.log("Sometimg went wrong!", error);
//     })