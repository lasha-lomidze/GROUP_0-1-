
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askForInput() {
    rl.question('Please enter some text (type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Exiting program...');
            rl.close();
        } else {
            fs.appendFile('data.txt', input + '\n', (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                } else {
                    console.log('Text has been added to data.txt');
                }
            });
            askForInput();
        }
    });
}
askForInput();
