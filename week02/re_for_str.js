// Copyright (c) 2020 Xu Kaixuan

/**

 * this is function to test whether a string is a StringLiteral.

 *

 * @param {ViewModelObject} source_str - the given string for test

 * @return {boolean}  - whether a string is a StringLiteral

 */

function regForStr(source_str){

  const doubleStrChaRe = /"(?:[^"\n\\\r\u2028\u2029])|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfntv\n\\\r\u2028\u2029])*"/;
  const singleStrChaRe = /'(?:[^'\n\\\r\u2028\u2029])|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfntv\n\\\r\u2028\u2029])*'/;

  return doubleStrChaRe.test(source_str)||singleStrChaRe.test(source_str);

}
