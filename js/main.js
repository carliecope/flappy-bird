var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    var app = new flappyBird.FlappyBird();
    app.run();
    app.pause();
    document.getElementById('gameResponse').innerText = "Flappy Bird";
    document.getElementById('startPauseBtn').innerText = "Start Flying!";
});