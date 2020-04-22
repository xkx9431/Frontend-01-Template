# 每周总结可以写在这里

### BNF

<Number> = "0" | "1" | "2" | ..... | "9"

<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

<PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

<MultiplicativeExpression> = <PrimaryExpression> |
    <MultiplicativeExpression> "*" <PrimaryExpression>|
    <MultiplicativeExpression> "/" <PrimaryExpression>

<AdditiveExpression> = <MultiplicativeExpression> |
    <AdditiveExpression> "+" <MultiplicativeExpression>|
    <AdditiveExpression> "-" <MultiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> |
    <LogicalExpression> "||" <AdditiveExpression> |
    <LogicalExpression> "&&" <AdditiveExpression>


### 文法类型

0. 无限制文法： ？：： = ？
1. 上下文相关文法： ？<A>?::=?<B>
2. 上下文无关文法： <A>::=?
3. <A>:: = <A>?  (error: <A>::=?<A>)

> REF:ECMA-262 Grammar Summary 部分: 703




// regex rewrite

<DecimalNumber> = /0|[1-9][0-9]/



### Unicode
1. blocks
2. category

// 字符串，变量 可以转义

// separate space


InputElement:
    WhiteSpace
    Comment
    LineTerminator
    Token// only this 有效
    Punctor
    Indentifier
        KEY
        Indentifier
        FUTURE RESERVER KEYWORDS



WhiteSpace
null break space
Zero width with no space

### type

## number :

why 0.1 + 0.2 !== 0.3?
ans:
JavaScript uses a 32-bit floating-point representation for numbers
The sign bit (the 31st bit) indicates that the number
is negative if the sign bit is 1. The next 8 bits (the 30th to 23rd bits) indicate the exponent
value, e. Finally, the remaining 23 bits represent the fraction value.


### 课后练习

1. 写一个正则表达式 匹配所有 Number 直接量
   答案参考:./reg_cat_all_num.js  (week02\reg_cat_all_num.js)
```javascript
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
   ```

2. 写一个 UTF-8 Encoding 的函数
    参考：week02\utf_8_encode.js
    ```javascript
    function strToBuffer(str){
    var n = str.length,
        idx = 0,
        utf8 = [],
        i, j, c;

    for(i = 0; i < n; ++i){
        c = str.charCodeAt(i);
        if(c <= 0x7F){
            utf8[idx++] = c;
        } else if(c <= 0x7FF){
            utf8[idx++] = 0xC0 | (c >>> 6);
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else if(c <= 0xFFFF){
            utf8[idx++] = 0xE0 | (c >>> 12);
            utf8[idx++] = 0x80 | ((c >>> 6) & 0x3F);
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else {
            j = 4;
            while(c >> (6 * j)) j++;
            utf8[idx++] = ((0xFF00 >>> j) & 0xFF) | (c >>> (6 * --j));
            while(j--)
                utf8[idx++] = 0x80 | ((c >>> (6 * j)) & 0x3F);
        }
    }
    return utf8;
}
    ```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
