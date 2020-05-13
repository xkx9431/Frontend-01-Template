const net = require('net');

// send request by request object methods
class Request{
  // method url  = host + port + path
  //headers
  // Content-Type
  // Content-length
  // body: key-value
  constructor(options){
    this.method = options.method||"GET";
    this.host = options.host;
    this.path = options.path||'/'
    this.port = options.port || 8000;
    this.body = options.body||{};
    this.headers = options.headers || {};
    if(!this.headers["Content-Type"]){
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if(this.headers["Content-Type"] === "application/json"){
      this.bodyText = JSON.stringify(this.body);
    }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
      this.bodyText = Object.keys(this.body).map(key =>`${key}=${encodeURIComponent(this.body[key])}`).join('&');
      this.headers["Content-Length"] = this.bodyText.length;
    }

  }
  toString(){
    return `${this.method} ${this.path} HTTP/1.1\r\n
${Object.keys(this.headers).map(key=>`${key}: ${this.headers[key]}`).join('\r\n')}
\r${this.bodyText}`
  }
  open(method,url){

  }
  send(connection){
    return new Promise((resolve,reject)=>{

      if(connection){
          connection.write(this.toString());
      } else{
          const connection = net.createConnection({
            host: this.host,
            port: this.port
          },()=>{
            connection.write(this.toString());
          })
      }
      client.on('data', (data) => {
        resolve(data.toString());
        client.end();
      });

      client.on('error', (err) => {
        reject(err);
        client.end();
      });
    } )
  }


}

class Response {

}
class TrunckedBodyParser {
  constructor(){
    this.WAITTING_LENGTH = 0;
    this.WAITTING_LENGTH_LINE_END = 1;
    this.READING_TRUNK =2;
    this.WAITTING_NEW_LINE = 3;
    this.WAITTING_NEW_LINE_END = 4;

    this.length = 0;
    this.isFinished = false;
    this.content = [];

    this.current = this.WAITTING_LENGTH;
  }


  receiveChar(char){
    if( this.current === this.WAITTING_LENGTH){
      if(char === '\r' ){
        if(this.length === 0){
          this.isFinished = true;
        }
        this.current = this.WAITTING_LENGTH_LINE_END;
      } else{
        this.length *=10;
        this.length += char.charCodeAt(0) - '0'.charCodeAt(0);
      }
    }else if( this.current === this.WAITTING_LENGTH_LINE_END){
      if(char === '\n' ){
        this.current = this.READING_TRUNK;
      } 
    } else if(this.current === this.READING_TRUNK) {
      this.content.push(char);
      this.length--;
      if(this.length ===0){
        this.current = this.WAITTING_NEW_LINE;
      }
    } else if(this.current === this.WAITTING_NEW_LINE){
      if(char === '\n'){
        this.current = this.WAITTING_LENGTH;
      }

    }
  }

}

class ResponseParser {
  constructor(){
    this.WAITTING_STATUS_LINE = 0;
    this.WAITTING_STATUS_lINEEND = 1;
    this.WAITTING_HEADER_NAME = 2;
    this.WAITTING_HEADER_SPACE = 3;
    this.WAITTING_HEADER_VALUE = 4;
    this.WAITTING_HEADER_LINE_END = 5;
    this.WAITTING_HEADER_BLOACK_END = 6;
    this.WAITTING_BODY = 7;
    this.current = this.WAITTING_STATUS_LINE;

    this.statusline = "";
    this.headers = {};
    this.headerName = "";
    this.headerValue = "";

    this.bodyParser = null;
  }

  getIsfinished(){
    return this.bodyParser&& this.bodyParser.isFinished;
  }
  getResponse(){
    this.statusline.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
    return {
      statusCode: RegExp.$1,
      statusText: RegExp.$2,
      headers: this.headers,
      body:this.bodyParser.content.join('')
    }
  }

  receive(string){

    for(let i =0; i< string.length; i++){
      this.receiveChar(string.charAt(i));
    }
    // console.log(parser.statusline);
    console.log(parser.headers);
  }


  receiveChar(char){

    // HTTP/1.1 200 OK
    // XMIN: 123
    // Date: Tue, 12 May 2020 15:18:15 GMT
    // Connection: keep-alive
    // Content-Length: 2

    if(this.current === this.WAITTING_STATUS_LINE){
      if(char==='\r'){
        this.current = this.WAITTING_STATUS_lINEEND;
      }else {
        this.statusline += char;
      }
    } else if( this.current === this.WAITTING_STATUS_lINEEND){
      if(char==='\n'){
        this.current = this.WAITTING_HEADER_NAME;
      } 
    } else if(this.current === this.WAITTING_HEADER_NAME){
      if(char ===":"){
        this.current = this.WAITTING_HEADER_SPACE;
      } else if(char==='\r'){
        this.current = this.WAITTING_HEADER_BLOACK_END;
        // if(this.headers['Transfer-Encoding'] === 'chunked'){
          this.bodyParser = new TrunckedBodyParser();
        // }
      } else{
        this.headerName += char;
      }
    } else if(this.current === this.WAITTING_HEADER_SPACE){
      if(char ===" "){
        this.current = this.WAITTING_HEADER_VALUE;
      }
    } else if(this.current === this.WAITTING_HEADER_VALUE){
      if(char ==="\r"){
        this.current = this.WAITTING_HEADER_LINE_END;
        this.headers[this.headerName] = this.headerValue;
        this.headerName = '';
        this.headerValue = '';
      } else{
        this.headerValue += char;
      }
    } else if(this.current === this.WAITTING_HEADER_LINE_END){
      if(char === '\n'){
        this.current = this.WAITTING_HEADER_NAME
      }
    } else if(this.current === this.WAITTING_HEADER_BLOACK_END){
      if(char === '\n'){
        this.current = this.WAITTING_BODY
      }
    } else if(this.current ==  this.WAITTING_BODY){
      this.bodyParser.receiveChar(char);
    }

  }

}


const client = net.createConnection({ 
  host:'127.0.0.1',
  port: 8000 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  // client.write('POST / HTTP/1.1\r\n');
  // client.write('host: 127.0.0.1\r\n');
  // client.write('Content-Length:21\r\n');
  // client.write('Content-Type: application/x-www-form-urlencoded\r\n');
  // client.write('\r\n');
  // client.write('field1=aaa&code=x%3D1\r\n');
});



// client.write(request.toString());

const parser = new ResponseParser();

// client.on('data', (data) => {
//   console.log(data.toString());
//   // parser.receive(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });
// client.on('error', (err) => {
//   console.log(err)
//   client.end();
// });

void async function(){
  let request = new Request({
    method:"POST",
    host:"127.0.0.1",
    port:"8000",
    path:'/',
    headers:{
      ["X-Foo2"]:"customed"
      
    },
    body:{
      name:"winter"
    }
  });
  // console.log(request.toString());
  let response  =  await request.send();
  console.log(response);

}();



