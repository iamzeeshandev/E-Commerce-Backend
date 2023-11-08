// To use the HTTP server and client one must require('node:http').
const http = require('http');

const server = http.createServer();

server.listen(4000, () => console.log('Successfully Running Sever on Port 4000 ...'))