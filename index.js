// To use the HTTP server and client one must require('node:http').
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: [
                {
                    id: 1,
                    name: "Product 1"
                },
                {
                    id: 2,
                    name: "Product 2"
                },
            ],
        }));
        return;
    } else if (req.url === '/category') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: [
                {
                    id: 1,
                    name: "Category 1"
                },
                {
                    id: 2,
                    name: "Category 2"
                },
            ],
        }));
        return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: "Hello World",
    }));

});

server.listen(4000, () => console.log('Successfully Running Sever on Port 4000 ...'))