

function convertStr2Num(string,idx=10){
  const chars = string.split("");
  let res = 0;
  let i=0;
  while( i< chars.length&& chars[i]!='.'){
    res = res*idx;
    res +=chars[i].codePointAt(0) - '0'.charCodeAt(0);
    i++;
  }
  if(chars[i]== "."){i++;}
  let fraction = 1;
  while(i<chars.length){
    fraction = fraction/10;
    res += (chars[i].codePointAt(0)- '0'.codePointAt(0))*fraction
    i++;
  }

  return res;

}

console.log( convertStr2Num("100"));
console.log( convertStr2Num("100.0123"));

