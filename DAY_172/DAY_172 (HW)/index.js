
const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// =====================
// Exercise 1: Create and trigger a custom event
// =====================
myEmitter.on('customEvent', () => {
    console.log('Custom event triggered!');
});
myEmitter.emit('customEvent'); 


// =====================
// Exercise 2: Pass data to an event and handle it
// =====================
myEmitter.on('dataEvent', (data) => {
    console.log(`Data received: ${data}`);
});
myEmitter.emit('dataEvent', 'Hello, World!'); 


// =====================
// Exercise 3: Create a custom event that triggers multiple listeners
// =====================
myEmitter.on('multiListenerEvent', () => {
    console.log('Listener 1 triggered!');
});
myEmitter.on('multiListenerEvent', () => {
    console.log('Listener 2 triggered!');
});
myEmitter.emit('multiListenerEvent'); 


// =====================
// Exercise 4: Remove a listener from a custom event
// =====================
const listener = () => {
    console.log('This listener will be removed.');
};

myEmitter.on('removeListenerEvent', listener);


myEmitter.removeListener('removeListenerEvent', listener);
myEmitter.emit('removeListenerEvent'); 


// =====================
// Exercise 5: Use the once method to create a one-time event listener
// =====================
myEmitter.once('oneTimeEvent', () => {
    console.log('This will only be triggered once!');
});

myEmitter.emit('oneTimeEvent'); 
myEmitter.emit('oneTimeEvent'); 
