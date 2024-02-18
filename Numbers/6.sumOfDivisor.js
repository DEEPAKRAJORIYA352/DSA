
function sumOfArrElements(arr){
 let sum = 0;
    for(let i=0; i<arr.length; i++){
          sum = sum + arr[i];
    }
    return sum;
}

function Divisor(num){
    let limit = Math.floor(num/2);
    let arr = [];
    for(let i=1; i<limit; i++){
        if((num%i)==0){
            arr.push(i);
            arr.push(num/i);
        }

     }
     let sumOfDivisor = sumOfArrElements(arr);
     console.log(arr);
     return sumOfDivisor;
   
}

let sumOfDivisor = Divisor(36);
console.log(sumOfDivisor);
