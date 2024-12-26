
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askForNumber() {
    rl.question('Please enter a number: ', (input) => {
        const num = parseInt(input);

        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.log('That is not a valid number.');
        }

        if (numbers.length === 10) {
            rl.close();
            const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sum the numbers
            console.log('The sum of the numbers is:', sum);
        } else {
            askForNumber();
        }
    });
}

askForNumber();
