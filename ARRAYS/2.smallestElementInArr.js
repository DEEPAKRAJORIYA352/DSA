/*
       Find the smallest element in an array
       Problem Statement: Given an array, we have to find the smallest element in the array.

      Input: arr = [2,5,1,3,0];
      Output: 0
 */

let arr = [2,5,1,3,0];
let n= arr.length;
let smallestElement = arr[0];

for(let i=0; i<n; i++){
    if(arr[i]<smallestElement){
        smallestElement = arr[i];
    }
}
console.log(smallestElement);