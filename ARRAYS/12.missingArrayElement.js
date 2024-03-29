
/*
 You are given a array of n elements.
 Array consist of elements from 0 to n

Find the missing number from the array

1. input-> 
        arr = [0, 1, 3]
       output-> 2
    2. input->
          arr[1, 0, 2, 4]
        output-> 3
*/ 

let arr = [1,0,2,4,3];

function findMissingElement(arr){
 
    let missingNum;
    for(let i = 0; i <= arr.length; i++){

       for(let j = 0; j <= arr.length; j++){

        if(arr[i] != j){
            missingNum = j;
        }
       }
       return missingNum;
    }

}
let missingNum = findMissingElement(arr);
console.log(missingNum);

