
let num = 4;

function getPrimeNumber(num){
    for(let i=2; i<num; i++){
        if(num%i==0){
            console.log(`${ num} is a not prime number`);
            break;
        }
        else{
            console.log(` ${ num} is a prime number`);
            break;
        }
    }
}
let PrimeNumber = getPrimeNumber(num);