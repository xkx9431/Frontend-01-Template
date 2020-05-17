const  http = require('http');

const server = http.createServer((req, res) => {
  console.log("request recieved");
  console.log(req.headers);
  res.setHeader('XMIN',123);
  res.setHeader('X-Foo','bar');
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("hello !");
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
