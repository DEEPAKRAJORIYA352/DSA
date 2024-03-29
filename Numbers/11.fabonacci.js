

let num = 20;

function getFabonacciSeries(num) {
  let arr = [];

  let first = 0;
  arr.push(first);
  
  let second = 1;
  arr.push(second);

  let third;
  let i = 0;
  while (i < num) {
    third = first + second;
    arr.push(third);
    first = second;
    second = third;
    i++;
  }
  console.log(arr);
}
getFabonacciSeries(num);
