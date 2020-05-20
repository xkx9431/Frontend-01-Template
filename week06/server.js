const  http = require('http');

const server = http.createServer((req, res) => {
  console.log("request recieved");
  console.log(req.headers);
  res.setHeader('XMIN',123);
  res.setHeader('X-Foo','bar');
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end(
    `<html maaa=a >
    <head>
        <style>
    body div #myid{
        width:100px;
        background-color: #ff5000;
    }
    body div img{
        width:30px;
        background-color: #ff1111;
    }
        </style>
    </head>
    <body>
        <div>
            <img id="myid"/>
            <img xkx="xukaixuan" />
        </div>
    </body>
    </html>`);
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8088);
