// const http =  require('http');
// const fs =  require('fs')


// // create a sever

// const sever = http.createServer( (req,res)=>{
//   let matched = req.url.match( /filename=([^&]+)/);
//   let filename = matched && matched[1];
//   console.log(filename);
//   if(!filename)
//     return
//   let writeStream = fs.createWriteStream('../server/public/' + filename);
//   req.pipe(writeStream);
//   writeStream.on('end',()=>{
//     res.writeHead( 200, { 'Content-Type' : 'text/plain' });
//     res.end('okay');
//   })
// })

// sever.listen(8081,()=>{
//   console.log(' server start, is listening 8081……')
// });




//**********************************
// directly upzipper

const https =  require('https');
const http =  require('http');
const fs =  require('fs')
const unzipper = require('unzipper');


// create a sever

const sever = http.createServer( (req,res)=>{
  if(req.url.match(/^\/auth/)){
    return auth(req,res)
  }

  if(!req.url.match(/^\/?/)){
    res.writeHead( 404, { 'Content-Type' : 'text/plain' });
    res.end('not found');
    return;
  }

  const token_to_check = req.headers.token;

  const user_options = {
    hostname:'api.github.com',
    port:443,
    path:`/user`,
    method:'GET',
    headers:{
      Authorization : 'token ' + token_to_check,
      " User-Agent" : 'toy-publish-xkx'
    }
  }

  const resquest = https.request(user_options,(response)=>{

    let body = ""
    response.on('data',(d)=>{
        body +=d.toString()
      }
    )

    response.on('end',(d)=>{
        let user = JSON.parse(body)
        // to do check
        let writeStream = unzipper.Extract({ path:'./public/package' });
        // let writeStream = fs.createWriteStream("../server/packages/package");
        req.pipe(writeStream);
        writeStream.on('end',()=>{
          res.writeHead( 200, { 'Content-Type' : 'text/plain' });
          res.end('okay');
        })
      }
    )
  })

  resquest.on('error',(e)=>{
    console.error(e)
  })

  resquest.end();

})


function auth(req,res){
  let code = req.url.match(/code=([^&]+)/)[1];
  let state = 'abc123';
  let client_secret = "81272d0add92b1c29f8d1ce87f3085499fd3a844";
  let client_id = "Iv1.4aa298552271cdc9";
  let redirect_uri = encodeURIComponent("http://localhost:8081/auth");

  let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`
  let url = `https://github.com/login/oauth/access_token?${params}`

  const options = {
    hostname:'github.com',
    port:443,
    path:`/login/oauth/access_token?${params}`,
    methods:'POST'
  };

  const resquest = https.request(options,(response)=>{


    let body = ""
    response.on('data',(d)=>{

      // stream 
      let result = d.toString().match(/access_token=([^&]+)/);
      if(result){
        let token = result[1];
        console.log(token);
        res.writeHead( 200, { 
          'access_token':token,
          'Content-Type' : 'text/plain' 
        });
        res.end(`<a href = "http://localhost:8080?token=${token}">publish</a>`);
      } else {
        res.writeHead( 200, { 
          'Content-Type' : 'text/plain' 
        });
        res.end('error')
      }

    })
  })

  resquest.on('error',(e)=>{
    console.error(e)
  })

  resquest.end();

  // res.writeHead( 200, { 'Content-Type' : 'text/plain' });
  // res.end('okay');
}

sever.listen(8081,()=>{
  console.log(' server start, is listening 8081……')
});
