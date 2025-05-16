async function foo(name) {
    console.log("My Name is :", name);
    return name;
};

async function info(name) {

    console.log("Welcom to Our Company!", name);

    const information = {
        Age: 23,
        SkillSet: " Java , React , Node ",
    }
    console.log(information);
    return information;

};

async function salaryExpectation(information) {

    information.salaryExpectation = 20000;
    const Your_Role = "Manager";
    console.log(information, Your_Role);
    return {information, Your_Role};


};

async function address({ information, Your_Role }) {

    information.currentAddress = "Mumbai , Dadar",
        information.PermentAddress = "Pune , Swargate",
        console.log(information);
    console.log(Your_Role);
    return ;

};

async function Main() {

    try {
        const name = await foo("Din Shahw rimns");
        const information = await info(name);
        const exSalary = await salaryExpectation(information);
        await address(exSalary);

    } catch (error) {
        console.log("Something Went wrong ", error);

    }
}
Main();