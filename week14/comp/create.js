export default function createElement(Cls, attributes, ...children){
    
  let o;

  if(typeof Cls === "string") {
      o = new Wrapper(Cls);
  } else {
      o = new Cls({
          timer: {}
      });
  }



  for(let name in attributes) {
      o.setAttribute(name, attributes[name]);
  }

  //console.log(children);
  console.log(o);
  for(let child of children) {
      if(typeof child === "string")
          child = new Text(child);

      o.appendChild(child);
  }

  return o;
}
export {
  createElement
}