// function callBackExample(name, callback){

//     console.log(`Your name is ${name}.`);
//     callback();

// }

// function Profile(){
//     console.log("This is Profile Page!");

// }

// callBackExample("Alice",Profile);

// *****************************************************************************************


function Sum(a, b, callback) {
    let c = a + b;
    callback(c);
    return c;
}

function Substract(c, d, callback) {
    let e = c - d;
    callback(e);
    return e;
}

function Multiply(f, g, callback) {
    let h = f * g;
    callback(h);
    return h;
}

function Divide(h, i, callback) {
    let j = h / i;
    callback(j);
    return j;
}

// calling function

Sum(10, 20, function (result1) {
    console.log("Sum :", result1);

    Substract(result1, 3, function (result2) {
        console.log("Subtract :", result2);

        Multiply(result2, 7, function (result3) {
            console.log("Multiply :", result3);

            Divide(result3, 2, function (result4) { 
                console.log("Divide :", result4);

            });
        });
    });
})