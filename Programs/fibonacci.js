// function fibonacci(n){

//     if(n ==0 ) return 0;
//     if(n==1) return 1;

//     return  fibonacci(n-1)+fibonacci(n-2);
// }
// console.log(fibonacci(8));


function fibonacci(n) {
    let a = 0, b = 1;

    console.log(a);
    if (n === 1) return;

    console.log(b);
    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacci(8);
