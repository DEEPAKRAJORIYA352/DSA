let arr = [4, 3, 2, 7, 8, -1, 5];
let k = 5;

function reverse(start, end){
    while(start < end){ 
        let temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp;       
        start++;          
        end--;             
    }
}
function rotateByK(k, arr) {
    let n = arr.length;
    reverse(k, n-1); // s=5, e=6   [4 3 2 7 8 5 -1]
    reverse(0, k-1); // s=0, e=k-1 [8 7 2 3 4 5 -1]
    reverse(0, n-1); // s=0, e=6   [-1 5 4 3 2 7 8]
}
rotateByK(k, arr);
console.log(arr);


// function rotateByK(k, arr){
//     const temp = [];
//     let n = arr.length;
//     for(let i=k; i<n; i++){   // pahle k ke bad wale element empty temp array me daldo 
//         temp.push(arr[i]);
//     }
//     for(let i=0; i<k; i++){  // then k element temp array me dal do
//         temp.push(arr[i]);
//     }
//     return temp; // and all set
// }

// const res = rotateByK(k, arr);
// console.log(res);
// console.log(arr);
