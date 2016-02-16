var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var app = new flappyBird.FlappyBird();
    app.run();
    app.gameOver();
    document.getElementById('startEndHeading').innerText = "Flappy Bird";
});