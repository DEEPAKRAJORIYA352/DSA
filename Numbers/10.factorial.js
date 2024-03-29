
let num = 5;

function getFactorial(num){
    let factorial = 1;

    for(let i=num; i>0; i--){
          factorial = factorial * i;
    }
    console.log(factorial);

}

getFactorial(num);