const http = require('http')
const child_process = require('child_process')
const archiver = require('archiver')
const fs = require('fs')

let filename = './price.png'
let packname = "./package"

let redirect_uri = encodeURIComponent("http://localhost:8081/auth")
child_process.exec( `start  https://github.com/login/oauth/authorize?client_id=Iv1.4aa298552271cdc9&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`);


const sever = http.createServer((request,res)=>{

  let token = request.url.match(/token=([^&]+)/)[1];
  const options = {
    host: 'localhost',
    port : 8081,
    path: '/?filename=package.zip',
    method:'POST',
    headers:{
      'token':token,
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

    
    let archive = archiver('zip',{
      zlib:{level: 9 }
    });
    archive.directory(packname,false)
    
    archive.finalize();
    // fs.stat(filename,(err,stat)=>{
    //   console.log(stat);
  
    archive.pipe(req)
    archive.on('end',()=>{
      console.log('arch end');
      req.end();
    })
  
})

sever.listen(8080)

/**


 * 
 */

// })
