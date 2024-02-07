/*
         Reverse a String
         Problem Statement: Reverse a String. Write a program that reverses a given string (in-place).
         string str = "HELLO";
 */

let str = "HELLO";
let n = str.length;

function stringReverse(str) {

 let Reverse = "";
 for(let i = n-1; i>=0; i--){
    Reverse+=str[i];
 }
 return Reverse;
  }

 let reverseString = stringReverse(str);

  console.log(reverseString);


