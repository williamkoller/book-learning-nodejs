'use strict';
const http = require('http');
const fs = require('fs');
const url = require('url');
const file = __dirname + '/burning-bird.png';

function handle(request, response) {
  const parse = url.parse;
  let name = parse(request.url, true).query.name;
  if (name === undefined) name = 'world';
  if (name == 'burningbird') {
    fs.readFile(file, function (err, stat) {
      if (err) {
        console.error(err);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Sorry, Burningbird isn`t around right now \n');
      } else {
        fs.readFile(file, function (err, data) {
          response.contentType = 'image/png';
          response.contentLength = stat.size;
          response.end(data, 'binary');
        });
      }
    });
  } else {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello ' + name + '\n');
  }
}

http.createServer(handle).listen(8124);

console.log('Server running at http://localhost:8124');
