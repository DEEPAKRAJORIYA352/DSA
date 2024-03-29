
/*
n = 2;
p = 3;

 n^p = 2^3 = 8;
 */ 

 let p = 4;
 let n = 2;

 let nToThePowerP = 1;
 function findNToThePowerP(n,p){
  for(let i = 1; i <= p; i++){
      nToThePowerP = nToThePowerP * n;
  }
  console.log(nToThePowerP);
}

 findNToThePowerP(n,p);
 