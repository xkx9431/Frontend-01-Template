# 每周总结可以写在这里

### expression

**new.target**
检测函数或构造方法是否是通过new运算符被调用的。在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是undefined。
```javascript
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
```

***important*
AdditiveExpression : AdditiveExpression + MultiplicativeExpression
  1. Let lref be the result of evaluating AdditiveExpression.
  2. Let lval be ? GetValue(lref).
  3. Let rref be the result of evaluating MultiplicativeExpression.
  4. Let rval be ? GetValue(rref).
  5. Let lprim be ? ToPrimitive(lval).
  6. Let rprim be ? ToPrimitive(rval).
  7. If Type(lprim) is String or Type(rprim) is String, then
    a. Let lstr be ? ToString(lprim).
    b. Let rstr be ? ToString(rprim).
    c. Return the string-concatenation of lstr and rstr.
  8. Let lnum be ? ToNumber(lprim).
  9. Let rnum be ? ToNumber(rprim).
  10. Return the result of applying the addition 


### statement
a =1+2;
;
debugger;
throw a;
continue label1;
break label1;
return 1+2;


{
  a:1  //a => label
}



