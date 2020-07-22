const parser = require('./parser')

module.exports = function(source,map){
  // console.log(source);
  // console.log("my loader is running !");

  let tree = parser.parseHTML(source);
  let template = null
  let script = null;

  for (let node of tree.children ) {
    if(node.tagName == 'template' )
      template = node;
      if(node.tagName === 'script')
        script = node.children[0].content;
  }

  console.log(template);

  let createCode = "";

  let visit = (node)=>{
    if(node.type === "text"){
      return JSON.stringify(node.content);
    }
    let attrs = {};
    for(let attribute of node.attributes ){
      attrs[attribute.name] = attribute.value;
    }
    let children = node.children.map(node=> visit(node))
    return  `createElement("${node.tagName}",${JSON.stringify(attrs) }, ${children})`
  }

  let res =  `
import {createElement,Wrapper,Text} from './create'
export class Carousel {
  render(){
    return ${visit(template)};
  }
  setAttribute(name, value) { //attribute
    this[name] =  value
  }
  mountTo(parent){
    this.render().mountTo(parent)
  }
}
  `;
  console.log(res);
  return res;

}