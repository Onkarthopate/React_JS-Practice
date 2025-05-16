function reverseString(str) {


    // let rev = str.split('').reverse().join('');
    // console.log(rev);

    let rev =" ";
    for (let i = str.length-1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev);
    

}
reverseString("NimapInfotech");