function foo(name , callback){
    console.log("Your Name is : ", name);
    callback(name);
    
}

function info(name , callback){
    console.log("Welcom to Our Company!" , name);
    const information = {
        Age : 23,
        SkillSet :" Java , React , Node ",
    }
    console.log(information);
    callback(information);
    
}

function salaryExpectation(information , callback){
    information.salaryExpectation = 20000;
    console.log(information);
    callback(information);
    
    
}

function address(information){
    information.currentAddress = "Mumbai,Dadar",
    information.PermenantAddress = "Pune,Swargate",
    console.log("My Full Information :",information);
    
}

foo("Omkar", function(name){
        info(name , function(information){
            salaryExpectation(information , function(information){
                address(information);
            })                
            })
})