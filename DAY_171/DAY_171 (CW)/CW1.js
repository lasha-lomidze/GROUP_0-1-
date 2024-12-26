
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

let players = [];

class Player {
    constructor(username, email, lvl = 1, score = 0) {
        this.username = username;
        this.email = email;
        this.lvl = lvl;
        this.score = score;

        eventEmitter.emit('registration', this);
    }
}
eventEmitter.on('registration', (player) => {
    players.push(player);
    console.log(`Welcome, ${player.username}! Your account has been created.`);
});

eventEmitter.on('authorization', (username) => {
    const player = players.find(p => p.username === username);
    if (player) {
        console.log(`${username} has successfully logged in!`);
    } else {
        console.log(`No account found for ${username}.`);
    }
});

const player1 = new Player('Luka', 'luka@example.com');

eventEmitter.emit('authorization', 'Luka');
