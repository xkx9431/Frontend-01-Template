const http =  require('http');
const fs =  require('fs')
const unzipper = require('unzipper')


// create a sever

const sever = http.createServer( (req,res)=>{

  let writeStream = unzipper.Extract({ path:'./public/package' });
  // let writeStream = fs.createWriteStream("../server/packages/package");
  req.pipe(writeStream);
  writeStream.on('end',()=>{
    res.writeHead( 200, { 'Content-Type' : 'text/plain' });
    res.end('okay');
  })
})

sever.listen(8080,()=>{
  console.log(' server start, is listening 8080……')
});