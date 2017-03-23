const http = require('http');
const server = http.createServer();
const { createReadStream } = require('fs');

// READ
const readStream = createReadStream('index.html');

// WRITE res is already the write stream that writes it to the server
server.on('request', (req, res) => {
  readStream.pipe(res);
  console.log('Request received for:', req.url);
});

server.listen(8080)
