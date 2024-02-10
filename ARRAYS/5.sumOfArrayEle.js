

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;

let sum = 0;

function sumOfArrEle() {
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
}

sumOfArrEle();

console.log(`sum of all array elements is : ${sum}`);
