//  Bubble Sort

let arr = [23,54,81,34,9,45,24,55,32];

for(let i=0;i<arr.length;i++){
    for(let j= i+1;j<arr.length;j++){

        if(arr[i] > arr[j]){
           let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Sorted Array : ", arr);    