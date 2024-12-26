
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from server\n');
});

server.listen(5500, '127.0.0.1', () => {
    console.log('Server is listening on port 5500');
});
