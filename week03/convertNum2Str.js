function convertNum2Str(number,idx=10){
  // sign
  const sign = number>0 ? '':'-';
  number  = Math.abs(number)

  let interger = Math.floor(number);
  const fraction = number - interger;
  let string = '';
  // convert interger
  while(interger > 0 ){
    string = interger % idx + string;
    interger = Math.floor(interger/idx);
  }

  // convert fraction
  if(fraction!==0){
    string += '.'
  }
  let cur_fraction = fraction;
  let fractionSum = 0; // every iter will add a effective bit
  let fraction_bit = 1; // 0.1,0.01,0.001
  while( (fraction - fractionSum) > Number.EPSILON){
    const curChar = Math.floor(cur_fraction*idx);
    string += curChar;
    fraction_bit /=idx;
    fractionSum += curChar*fraction_bit;
    cur_fraction = cur_fraction*idx - curChar;
}
  return sign + string;
}



console.log(convertNum2Str(23.456))
