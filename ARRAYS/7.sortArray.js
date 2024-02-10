
// input arr = [3,2,1,6,5,4];
// output    = [1,2,3,4,5,6];

let arr = [1, 4, 2, 5, 3, 6];
let n = arr.length;

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
sortArray(arr,n);
console.log(arr);