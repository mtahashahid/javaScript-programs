let arr1 = [1, 6,2, 8,4,6,8,8,8];
let arr2 = [1, 2, 3, 4];

// Method 1: Using concat()

let mergedArray = arr1.concat(arr2);
console.log(mergedArray);

// Method 2: Using spread operator (...)

let mergedArray1 = [...arr1,...arr2];
console.log(mergedArray1);