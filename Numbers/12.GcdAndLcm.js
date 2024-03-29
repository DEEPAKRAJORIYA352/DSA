

function getLCM(a,b){
    let LCM= (a*b)/gcd;
    return LCM;
}
function getGcd(a, b) {
  let gcd = 1;
  let min;

  if (a == 0) {
    return b;
  }

  if (b == 0) {
    return a;
  }
  if (a < b) {
    min = a;
  } else {
    min = b;
  }

  for (let i = 1; i <= min; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

let gcd = getGcd(4, 8);
let LCM = getLCM(4,8)
console.log(gcd);
console.log(LCM);
