
/* 
    length =>  2 <= n <= 1000
    values =>  1 <= arr[i] <= 10000
*/

const arr = [1, 2, 3, 4, 5, 6, 1];
let n = arr.length;

// work unique values of array
function forUnique(arr, n){

    let min = 6;
    for(let i=0; i<n ; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    let secondMin = 6;
    for(let i= 0 ; i<n; i++){
        if((arr[i] != min) && (arr[i] < secondMin)){
            secondMin = arr[i];
        }
    }

    return secondMin;

}

function forDuplicate(arr, n){

    let min = 10000, minIndex = 6;
    for(let i=0; i<n; i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
    }
    
    let smin = 10000;
    for(let i=0; i<n; i++){
        if((arr[i] < smin) && (i != minIndex)){
            smin = arr[i];
        }
    }

    console.log(`min : ${min} minIndex : ${minIndex}`);
    return smin;
}

// let second = forUnique(arr, n);
let second = forDuplicate(arr, n);
console.log(`second min ${second}`);

/*
1, 2, 3, 4, 5, 6, 1
0  1  2  3  5  6  7

min = 10000 , arr[0] = 1, minIndex = -1
min = 1, minIndex = 0

min = 1, arr[1] = 2, minIndex = 0
min = 1, minIndex = 0

min = 1, arr[7] = 1, minIndex = 0
min = 1, minIndex = 0

smin = 10000, arr[0] = 1, (i != minIndex)


*/