const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function listenOnPort(portNumber) {
  server.listen(portNumber, () => {
    console.log(`Server listening on port ${portNumber}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE') {
    const newPort = portNumber + 1;
    console.log(`Port ${portNumber} is in use, trying port ${newPort}`);
    listenOnPort(newPort);
  } else {
    console.error(`Server failed to start: ${err}`);
  }
}

listenOnPort(port);

server.on('error', handleError);