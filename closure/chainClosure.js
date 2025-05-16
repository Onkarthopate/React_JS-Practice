const a=10;

function sum(x){
    return function(y){
    return function(z){
    return function(d){
    return function(b){
        return x+y+z+d+b+a;
    };
};};};
}

console.log(sum(2)(2)(3)(5)(7));
