
const http = require('http');

// მომხმარებლების მასივი
const users = [];

// სერვერის შექმნა
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        // HTML კოდის დაბრუნება
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Welcome to the Server</h1></body></html>');
    } else if (req.url === '/users' && req.method === 'GET') {
        // მომხმარებლების მასივის დაბრუნება
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users)); // JSON ფორმატში ვაბრუნებთ მომხმარებლების მასივს
    } else if (req.url === '/users' && req.method === 'POST') {
        // ახალ მონაცემს ვიღებთ და ვამატებთ მასივში
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // ვაგროვებთ მონაცემებს
        });
        req.on('end', () => {
            try {
                const user = JSON.parse(body); // JSON-ის გადაყვანა ობიექტად
                users.push(user); // მომხმარებლის დამატება მასივში
                res.statusCode = 201; // რესურსი წარმატებით შეიქმნა
                res.end(JSON.stringify({ message: 'User added successfully', user }));
            } catch (error) {
                res.statusCode = 400; // ცუდი მოთხოვნა
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    } else {
        // 404 - არასწორი ენდპოინთი
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Endpoint not found');
    }
});

// სერვერის გაშვება პორტ 5500-ზე
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
