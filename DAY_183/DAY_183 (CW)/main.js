const http = require('http');
const url = require('url');

// პროდუქციის მონაცემები (5 პროდუქტი)
let products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
    { id: 4, name: 'Headphones', price: 200 },
    { id: 5, name: 'Keyboard', price: 100 }
];

// სერვერის შექმნა
const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);  // URL parse
    const { pathname } = reqUrl;

    // CORS და სათაურების დაყენება
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/products') {
        if (req.method === 'GET') {
            // GET მოთხოვნა - ყველა პროდუქტის დასაბეჭდად
            res.statusCode = 200;
            res.end(JSON.stringify(products));
        } else if (req.method === 'POST') {
            // POST მოთხოვნა - ახალი პროდუქტის დამატება
            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });

            req.on('end', () => {
                const newProduct = JSON.parse(body);  // ახალი პროდუქტი
                products.push(newProduct);  // მასივში დამატება
                res.statusCode = 200;
                res.end(JSON.stringify(products));  // გამოგვაქვს განახლებული პროდუქციის ჩამონათვალი
            });
        } else if (req.method === 'DELETE') {
            // DELETE მოთხოვნა - ბოლო პროდუქტის წაშლა
            products.pop();  // ბოლო ელემენტის წაშლა
            res.statusCode = 200;
            res.end(JSON.stringify(products));  // გამოგვაქვს განახლებული პროდუქციის ჩამონათვალი
        } else {
            // სხვა მეთოდები - 405 შეცდომა
            res.statusCode = 405;
            res.end('Method Not Allowed');
        }
    } else {
        // სხვა path - 404 შეცდომა
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// სერვერის გაშვება
server.listen(5001, () => {
    console.log('Server running on port 5001');
});
