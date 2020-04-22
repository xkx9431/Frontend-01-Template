// this is function to cat all num by using regex:


function cat_all_nums(source_str){
  // let dec_re = /^([+-]?[0-9]+)?[.]?[0-9]+[Ee]?[+-]?[0-9]+/;
  let dec_re = /^[+-]?(0|([1-9]\d*))(\.\d+)?(E|e)?(0|([1-9]\d*))$/;

  return dec_re.test(source_str)
}

console.log(cat_all_nums('1.6e8'))
console.log(/^(e|E){1}$/.test('E'))