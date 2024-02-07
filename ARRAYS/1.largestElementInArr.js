/*
      Find the Largest element in an array
      Problem Statement: Given an array, we have to find the largest element in the array.

      Input: arr = [2,5,1,3,0];
      Output: 5
*/

let arr = [2, 5, 1, 3, 0];
let n = arr.length;
let LargestElement = arr[0];

for(let i=0; i<n; i++){
    if(arr[i]>LargestElement){
       LargestElement = arr[i];
    }
}

console.log(LargestElement);