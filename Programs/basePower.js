function basePower(base,power){

    if(power == 0) return 1;

    return base * basePower(base , power-1);
}
console.log(basePower(2,5));
