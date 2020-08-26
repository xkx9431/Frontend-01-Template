const http = require('http')
const querystring = require('querystring')
const archiver = require('archiver')
const fs = require('fs')

let filename = './price.png'
let packname = "./package"

let archive = archiver('zip',{
  zlib:{level: 9 }
});
archive.directory(packname,false)


archive.finalize();

// fs.stat(filename,(err,stat)=>{
//   console.log(stat);
  const options = {
    host: 'localhost',
    port : 8080,
    path: '/?filename=package.zip',
    method:'POST',
    headers:{
      'Content-Type': 'application/octet-stream',
    }
  };

  const req = http.request(options, (res)=>{
    console.log( `STATUS:${res.statusCode}`);
    console.log( `STATUS:${JSON.stringify(res.headers)}`);
  });

  req.on('error',(e)=>{
    console.log( `error: ${e.message}`)
  })

  archive.pipe(req)
  archive.on('end',()=>{
    console.log('arch end');
    req.end();
  })


// })
