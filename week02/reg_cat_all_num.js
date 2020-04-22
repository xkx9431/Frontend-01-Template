// Copyright (c) 2020 Xu Kaixuan

/**

 * this is function to test whether a string is a NumericLiteral.

 *

 * @param {ViewModelObject} source_str - the given string for test

 * @return {boolean}  - whether a string is a NumericLiteral

 */

function cat_all_num(source_str){

  // validate for DecimalLiteral
  const dec_re = /^[+-]?(0|([1-9]\d*))(\.\d+)?(E|e)?(0|([1-9]\d*))$/;

  // validate for BinaryIntegerLiteral
  const bin_re = /^((0B)|(0b))?[01]+$/

  // validate for OctalIntegerLiteral
  const oct_re = /^((0o)|(0O))?[0-7]+$/

  // validate for HexIntegerLiteral
  const hex_re = /^((0X)|(0x))?[0-9a-fA-F]+$/

  return dec_re.test(source_str)||bin_re.test(source_str)||oct_re.test(source_str)||hex_re(source_str)
}




// console.log(cat_all_num('1.6e8'))
// console.log(/^[+-]?(0|([1-9]\d*))(\.\d+)?(E|e)?(0|([1-9]\d*))$/.test('12.01'))
// console.log(/^((0B)|(0b))?[01]+$/.test('0b0101'))
// console.log(/^((0o)|(0O))?[0-7]+$/.test('0o156'))
// console.log(/^((0X)|(0x))?[0-9a-fA-F]+$/.test('32aF'))