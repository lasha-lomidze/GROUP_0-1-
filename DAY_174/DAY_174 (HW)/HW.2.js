
// =====================
// Task 1: Basic Input and Output
// =====================
process.stdout.write("What's your name? ");
process.stdin.once('data', (input) => {
  const name = input.toString().trim();
  console.log(`Hello, ${name}!`);
});

// =====================
// Task 2: Echo Program
// =====================
process.stdout.write("Type something (type 'exit' to quit): ");
process.stdin.on('data', (input) => {
  const text = input.toString().trim();
  if (text.toLowerCase() === 'exit') {
    console.log('Goodbye!');
    process.exit();
  }
  console.log(text);
});

// =====================
// Task 3: Prompt User for Input
// =====================
process.stdout.write("Please enter your age: ");
process.stdin.once('data', (input) => {
  const age = input.toString().trim();
  console.log(`You are ${age} years old.`);
});

// =====================
// Task 4: Number Validation
// =====================
function askForNumber() {
  process.stdout.write("Please enter a number: ");
  process.stdin.once('data', (input) => {
    const num = input.toString().trim();
    if (!isNaN(num)) {
      console.log(`Thank you! Your number is ${num}.`);
      process.exit();
    } else {
      console.log("That's not a valid number. Try again.");
      askForNumber();
    }
  });
}
askForNumber();

// =====================
// Task 5: Countdown Timer
// =====================
process.stdout.write("Enter a starting number for the countdown: ");
process.stdin.once('data', (input) => {
  let num = parseInt(input.toString().trim(), 10);
  if (isNaN(num)) {
    console.log("Invalid input. Please enter a number.");
    process.exit();
  }
  const interval = setInterval(() => {
    console.log(num);
    num--;
    if (num < 0) {
      clearInterval(interval);
      console.log('Countdown complete!');
      process.exit();
    }
  }, 1000);
});
