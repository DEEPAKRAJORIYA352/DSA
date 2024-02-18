
let num = 341;

function sumOfDigits(n){
    let sum = 0;
     while(n>0){
        let rem = n%10;
        sum = sum + rem;
        n = Math.floor(n/10);
     }
     console.log(sum);
}
sumOfDigits(num);