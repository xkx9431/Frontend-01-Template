const  http = require('http');

const server = http.createServer((req, res) => {
  console.log("request recieved");
  console.log(req.headers);
  res.setHeader('XMIN',123);
  res.end("ok");
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
