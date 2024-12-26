const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// =====================
// Exercise 1: Read user input and print it back with a prefix
// =====================
rl.question('Enter something: ', (userInput) => {
    console.log(`You entered: ${userInput}`);
    rl.close();
});

// =====================
// Exercise 2: Continuously read user input until a specific keyword is entered
// =====================
const startReading = () => {
    rl.question('Enter a command (type "exit" to quit): ', (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
        } else {
            console.log(`You entered: ${userInput}`);
            startReading();
        }
    });
};

startReading();

// =====================
// Exercise 3: Build a simple calculator
// =====================
const calculator = () => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            rl.question('Enter the second number: ', (num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let result;

                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                    default:
                        console.log('Invalid operator');
                        rl.close();
                        return;
                }

                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
};

calculator();

// =====================
// Exercise 4: Transform user input to uppercase and print it
// =====================
const toUppercase = () => {
    rl.question('Enter text to convert to uppercase: ', (userInput) => {
        console.log(userInput.toUpperCase());
        rl.close();
    });
};

toUppercase();

// =====================
// Exercise 5: Progress bar simulation
// =====================
const progressBar = () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        process.stdout.write(`Progress: [${'='.repeat(progress / 10)}${' '.repeat(10 - progress / 10)}] ${progress}%\r`);
        if (progress === 100) {
            clearInterval(interval);
            console.log('\nDownload complete!');
        }
    }, 500);
};

progressBar(); 
