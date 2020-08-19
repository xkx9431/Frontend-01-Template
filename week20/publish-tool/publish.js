const http = require('http')
const querystring = require('querystring')



const postData = querystring.stringify({
  'content': " hello world 123 xkx"
})

const fs = require('fs')

const options = {
  host: 'localhost',
  port : 8081,
  path: '/?filename=x.html',
  method:'GET',
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length':Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res)=>{
  console.log( `STATUS:${res.statusCode}`);
  console.log( `STATUS:${JSON.stringify(res.headers)}`);
});

req.on('error',(e)=>{
  console.log( `error: ${e.message}`)
})

let readStream = fs.createReadStream('./price.png')
readStream.pipe(req);
req.write(postData);
req.end();