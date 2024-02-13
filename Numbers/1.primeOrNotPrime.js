
let num = 4;

function getPrimeNumber(num){
    for(let i=2; i<num; i++){
        if(num%i==0){
            console.log(`${ num} is a not prime number`);
            break;
        }
            console.log(` ${ num} is a prime number`);
    }
}
let PrimeNumber = getPrimeNumber(num);
