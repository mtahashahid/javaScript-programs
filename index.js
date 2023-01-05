let arr1 = [1, 6, 8, 4];
let arr2 = [1, 2, 3, 4];

let mergedArray = arr1.concat(arr2);
let evenArray = [];

const result = (mergedArray)=>{
    console.log(mergedArray);
    for (let i = 0; i < mergedArray.length; i++) {
        if(mergedArray[i] % 2 != 0){
            
            evenArray.push(mergedArray[i]);
        }
    }
    return evenArray;
}
let ans = result(mergedArray);
console.log(`ans wiht ${ans}`);