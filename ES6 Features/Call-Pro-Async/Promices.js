function Sum(a, b) {
    return new Promise((resolve) => {
        let c = a + b;
        resolve(c);
    })
}

function Substract(a, b) {
    return new Promise((resolve) => {
        let c = a - b;
        resolve(c);
    })
}

function Multiply(a, b) {
    return new Promise((resolve) => {
        let c = a * b;
        resolve(c);
    })
}
function Divide(a, b) {
    return new Promise((resolve) => {
        if (b === 0) {
            reject("Division by zero");
        } else {
            let c = a / b;
            resolve(c);
        }
    })
}   

// calling function by promises


Sum(10, 20)
    .then(function (r1) {
        console.log("Sum :", r1);

        return Substract(r1, 3);
    })
    .then(function (r2) {
        console.log("Sub :", r2);

        return Multiply(r2, 7);
    })
    .then(function (r3) {
        console.log("Multiply :", r3);

        return Divide(r3, 2);
    })
    .then(function (r4) {
        console.log("Divide :", r4);

        return r4;
    })
    .catch(function (err) {
        return err;
    });

