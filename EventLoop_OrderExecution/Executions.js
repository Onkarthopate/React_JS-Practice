console.log("Execution Begin");

async function fun12() {
    return "async 12";
}
fun12().then((res) => console.log(res));

Promise.resolve().then(() => {
    console.log("promise 2");
});

setTimeout(() => {
    const name = "omkara";
    console.log("name is:", name);
    console.log("set Timeout1");
}, 1000);

Promise.resolve().then(() => {
    console.log("promise 1");
});

async function fun1() {
    return "async 1";
}
fun1().then((res) => console.log(res));

setTimeout(() => {
    const name = "Sagar";
    console.log("name is:", name);
    console.log("set Timeout2");
}, 1000);

Promise.reject().catch(() => {
    console.log("Promise rejected");
});

console.log("Finished Execution");

async function fun2() {
    return "async 2";
}
fun2().then((res) => console.log(res));
