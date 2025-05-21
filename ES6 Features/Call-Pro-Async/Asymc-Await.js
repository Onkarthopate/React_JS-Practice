async function Sum(a, b) {
    let c = a + b;
    return c;
}

async function Substract(a, b) {
    let c = a - b;
    return c;
}

async function Multiply(a, b) {
    let c = a * b;
    return c;
}

async function Divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    let c = a / b;
    return c;
}

async function runOperations() {
    try {
        const r1 = await Sum(10, 20);
        console.log("Sum :", r1);

        const r2 = await Substract(r1, 3);
        console.log("Sub :", r2);

        const r3 = await Multiply(r2, 7);
        console.log("Multiply :", r3);

        const r4 = await Divide(r3, 2);
        console.log("Divide :", r4);

        return r4;
        
    } catch (err) {
        console.error("Error:", err.message);
    }
}

runOperations();
