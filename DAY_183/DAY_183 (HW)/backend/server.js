const http = require('http');

// Product data
const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
];

// Create server
const server = http.createServer((req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/products' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end('Endpoint not found');
    }
});

// Start server on port 5001
server.listen(5001, () => {
    console.log('Backend server is running on port 5001');
});
