/*
Input:153
Output: Yes
153 is an Armstrong number.
1*1*1 + 5*5*5 + 3*3*3 = 153
*/

let num = 153;

function Armstrong(m){
    let result = 0;
    while(m>0){
        let rem = m%10;
        result = (result + (rem*rem*rem)); // 0+27 = 27  ,  27+125= 152 , 152+1=153
        m = Math.floor(m/10);
       
    }
    return result;
    
}

function ArmstrongNum(num){
    let Armresult = Armstrong(num);
    if(num === Armresult){
        console.log(`${num} is an armstrong number`);
    }
    else{
        console.log(`${num} is not a armstrong number`);
    }
    
}

ArmstrongNum(num);
