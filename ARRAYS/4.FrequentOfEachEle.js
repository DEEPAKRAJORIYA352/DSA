/*
Count frequency of each element in the array
Problem statement: Given an array, we have found the number of occurrences of each element in the array.

Input: arr = [10,5,10,15,10,5];
Output: 10  3
	    5   2
        15  1

Explanation: 

            10 occurs 3 times in the array
            5 occurs 2 times in the array
            15 occurs 1 time in the array
*/

let arr = [10, 5, 10, 15, 10, 5];   
let n = arr.length;

let count = {};

function frequencyOfEachEle(arr,count){
for(let i=0; i<n; i++){  
    if(count[arr[i]]){   
        count[arr[i]] = count[arr[i]]+1;  //( 10 => 1 + 1 + 1 = 3) ,( 5 => 1 + 1 = 2 )
    }
    else{
        count[arr[i]] = 1; //( 10 => 1) ,( 5 => 1 ),(15 => 1)
    }
}
    
}

frequencyOfEachEle(arr,count);
console.log(count);
