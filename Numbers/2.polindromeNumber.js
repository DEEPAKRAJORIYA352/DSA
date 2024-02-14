
let num = 151;

function reverseNumber(m) {
  let reverse = 0;
  while (m !== 0) {
    let rem = m % 10; // 1 , 5 , 1
    reverse = reverse * 10 + rem; // 0*10+1 = 1 , 1*10+5 = 15 , 15*10+1 = 151
    m = Math.floor(m / 10); // 15 , 1 , 0
  }
  return reverse;
}

function polindromeNumber(num) {
 let reverseNum = reverseNumber(num);

  if (num === reverseNum) {
    console.log(`this is a polindrome number`);
  } else {
    console.log(`this is not a polindrome number`);
  }
}

polindromeNumber(num);
