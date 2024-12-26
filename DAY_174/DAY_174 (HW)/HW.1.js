const EventEmitter = require('events');
const fs = require('fs');
const emitter = new EventEmitter();

// =====================
// Task 1: Basic Event Handling
// =====================
emitter.on('start', () => {
    console.log('The start event has been triggered!');
});

emitter.emit('start');

// =====================
// Task 2: Event with Data
// =====================
emitter.on('userJoined', (name) => {
    console.log(`Welcome, ${name}!`);
});

emitter.emit('userJoined', 'Alice');

// =====================
// Task 3: Multiple Listeners for One Event
// =====================
emitter.on('newOrder', (orderDetails) => {
    console.log(`Order logged: ${JSON.stringify(orderDetails)}`);
});

emitter.on('newOrder', (orderDetails) => {
    console.log(`Email sent to: ${orderDetails.email}`);
});

emitter.on('newOrder', (orderDetails) => {
    console.log(`Inventory updated for item: ${orderDetails.item}`);
});

emitter.emit('newOrder', {
    id: 123,
    item: 'Laptop',
    email: 'customer@example.com',
});

// =====================
// Task 4: Once Listener
// =====================
emitter.once('shutdown', () => {
    console.log('The system is shutting down. This message will appear only once.');
});
emitter.emit('shutdown');
emitter.emit('shutdown');

// =====================
// Task 5: Error Handling in Events
// =====================
emitter.on('fileRead', (error, data) => {
    if (error) {
        console.error(`Error occurred: ${error.message}`);
    } else {
        console.log(`File content: ${data}`);
    }
});

fs.readFile('./nonexistent.txt', 'utf-8', (err, data) => {
    emitter.emit('fileRead', err, data);
});

fs.writeFileSync('./sample.txt', 'Hello, World!');
fs.readFile('./sample.txt', 'utf-8', (err, data) => {
    emitter.emit('fileRead', err, data);
});
