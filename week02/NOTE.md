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



266 re cat all num
按照 ECMA-262 Numeric -Literal
NumericLiteral ::
1. DecimalLiteral
2. BinaryIntegerLiteral
3. OctalIntegerLiteral
4. HexIntegerLiteral

1. DecimalLiteral
```javascrit
/ /
interger:
/^([+-]?[0-9]+)?[.]?[0-9]+[Ee]?[+-]?[0-9]+/






```



utf-8 encodeing
string re tmple

172 escape

