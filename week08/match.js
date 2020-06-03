function match(element, selector) {
  if (!selector || !element.attributes) 
    return false

  let regClass = /(\.\w+)+/g
  let resClass = selector.match(regClass)

  let regId = /(#\w+)+/g
  let resId = selector.match(regId)

  if (resClass) {
    let resClassArr = []
    for (let i = 0; i < resClass.length; i ++) {
      let tempArr = resClass[i].split('.')
      for (let j = 1; j < tempArr.length; j ++) {
        resClassArr.push(tempArr[j])
      }
    }
    let classAttr = element.attributes.filter(attr => attr.name === "class")
    let classAttrRes = []
    // classAttr:  [ { name: 'class', value: 'c2 c3' } ]
    if (classAttr && classAttr[0]) {
      classAttrRes = classAttr[0]["value"].split(" ")
    }
    let tempFlag = null
    for (let i = 0; i < resClassArr.length; i ++) {
      tempFlag = false
      let k = 0
      for (; k < classAttrRes.length; k ++) {
        if (classAttrRes[k] === resClassArr[i]) {
          tempFlag = true
          break
        }
      }
      if (!tempFlag && k === classAttrRes.length) {
        return false;
      }
    }
  }
  
  if (resId && resId[0].charAt(0) == "#") { // id选择器有标识符#，因此可以出现在任意位置，需要用正则去匹配
    const attr = element.attributes.filter(attr => attr.name === "id")[0]
    if (attr && attr.value === resId[0].replace("#", '')) {
      return true
    } else {
      return false
    }
  } else if(selector.charAt(0) !== "#" && selector.charAt(0) !== "."){ // 只需要判断选择器开头是不是 非 id 选择器标识符 # 或者 class 选择器标识符 .
    if (element.tagName === selector) {
      return true
    } else {
      return false
    }
  } else if (resClass && resClass.length) {
    return true
  }
  return false
}

function specificity(selector) {
  const p = [0, 0, 0, 0]
  const selectorParts = selector.split(" ")
  let regClass = /(\.\w+)+/g
  let resClass = selector.match(regClass)
  if (resClass && resClass.length) {
    for (let i = 0; i < resClass.length; i ++) {
      let tempArr = resClass[i].split('.')
      for (let j = 1; j < tempArr.length; j ++) {
        p[2] ++
      }
    }
  }
  for (let part of selectorParts) {

    let regId = /(#\w+)+/g
    let resId = part.match(regId)
    if (resId && resId[0].charAt(0) == "#") {
      p[1] += 1
    } else if (part.charAt(0) !== "#" && part.charAt(0) !== "."){
      p[3] += 1
    }
  }
  console.log('selector', selector)
  console.log('p', p)
  return p
}

function compare(sp1, sp2) {
  if (sp1[0] - sp2[0]) {
    return sp1[0] - sp2[0]
  }
  if (sp1[1] - sp2[1]) {
    return sp1[1] - sp2[1]
  }
  if (sp1[2] - sp2[2]) {
    return sp1[2] - sp2[2]
  }
  return sp1[3] - sp2[3]
}