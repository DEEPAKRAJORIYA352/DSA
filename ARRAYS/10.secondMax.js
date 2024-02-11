const arr = [1, 5, 100, 200, 1000, 1000, 99];

// n = arr.length
// 2 <= n <= 10000 
// 0 <= arr[i] <= 10000

let n = arr.length;
let maxEle = 1;

for(let i=0; i<n; i++){
    if(arr[i] > maxEle){
        maxEle = arr[i];
    }
}
console.log(`Maximum Element ${maxEle}`);

let secondMax = 1;
for(let i=0; i<n; i++){
    if((arr[i] > secondMax) && (arr[i] != maxEle)){
        secondMax = arr[i];
    }
}
console.log(`second Max Element ${secondMax}`);


