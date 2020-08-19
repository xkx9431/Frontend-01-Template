const http =  require('http');
const fs =  require('fs')

// create a sever

const sever = http.createServer( (req,res)=>{
  let matched = req.url.match( /filename=([^&]+)/);
  let filename = matched && matched[1];
  console.log(filename);
  if(!filename)
    return
  let writeStream = fs.createWriteStream('../server/public/' + filename);
  req.pipe(writeStream);
  req.on('end',()=>{
    res.writeHead( 200, { 'Content-Type' : 'text/plain' });
    res.end('okay');
  })
})

sever.listen(8081);