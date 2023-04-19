const http = require('http');

function handle(request, response) {
  const method = request.method;
  const url = request.url;

  console.log(`METHOD: ${method}: URL: ${url}`);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World \n');
}

http.createServer(handle).listen(8124);

console.log('Server running at http://localhost:8124');
