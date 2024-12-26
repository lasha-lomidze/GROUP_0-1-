// 1. Basic Try-Catch Error Handling
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            if (isNaN(a) || isNaN(b)) throw new Error('Invalid number input.');
            if (b === 0) throw new Error('Division by zero is not allowed.');
            console.log(`Result: ${a / b}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
});

// 2. Custom Error Throwing
rl.question('Enter a number: ', (input) => {
    try {
        const num = parseFloat(input);
        if (isNaN(num)) throw new Error('Invalid number input.');
        if (num < 0) throw new Error('Negative number is not allowed.');
        console.log('The number is positive.');
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
});

// 3. Error Stack Trace
function problematicFunction() {
    throw new Error('Something went wrong!');
}

try {
    problematicFunction();
} catch (error) {
    console.error(error.stack);
}

// 4. Error Handling with Error Object Properties
try {
    throw new Error('An unknown error occurred.');
} catch (error) {
    console.log(`Error Name: ${error.name}`);
    console.log(`Error Message: ${error.message}`);
    console.log(`Error Stack: ${error.stack}`);
}
