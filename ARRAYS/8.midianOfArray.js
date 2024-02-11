/*
    find the median of array 
    input - [1,4,2,5,3,6];
    output- 3.5

    For finding the median we have need to sort the input array
    [1,2,3,4,5,6];

    So you can to choose the element which is present in center of the array

    If the length of array is even : then you can choose two elements and return there average in
    above input 3 and 4 are middle elements so there avg is 3.5

    But if the array length is odd the return middle element
        input - [2,4,5,8,10];
        output- 5

 */

let arr = [3, 2, 1, 5, 4, 6];
 //        2,3,1,5,4
 //        2,1,3,5,4
 //        2,1,3,4,5
 //         


let medianforOddArrays;
let medianforEvenArrays;

function sortArray(arr,n) {
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n-1; j++) { 
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function medianOfArrElements(arr) {
  let n = arr.length;
  sortArray(arr,n);
  let mid = Math.floor(n/2);
  if ((n % 2) == 0) {
    medianforEvenArrays = (arr[mid] + arr[mid - 1]) / 2;
  }
  if ((n % 2) == 1) {
    medianforOddArrays = arr[mid];
  }
}

medianOfArrElements(arr);

console.log(`median for Even Arrays is : ${medianforEvenArrays}`);
console.log(`median for Odd Arrays is : ${medianforOddArrays}`);
