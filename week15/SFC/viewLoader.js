const parser = require('./parser')

module.exports = function(source,map){
  console.log(source);
  console.log("my loader is running !");
  console.log(parser.parseHTML(source));

  return "";
}