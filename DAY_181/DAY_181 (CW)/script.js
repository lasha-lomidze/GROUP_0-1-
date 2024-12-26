
const http = require('http');

const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com' }
];

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' || req.url === '/index.html') {
        res.statusCode = 200;
        res.end('hello on website');
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    } else if (req.url === '/products') {
        res.statusCode = 200;
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end('not found');
    }
});

server.listen(5001, () => {
    console.log('Server is running on port 5001');
});
