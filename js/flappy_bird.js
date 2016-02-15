var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe');
var garbageSystem = require('./systems/garbage');

var bird = require('./entities/bird');
var pipe = require('./entities/pipe');
var leftEdge = require('./entities/leftEdge');
var topEdge = require('./entities/topEdge');
var bottomEdge = require('./entities/bottomEdge');

var FlappyBird = function() {
    this.entities = [new bird.Bird(this), new leftEdge.LeftEdge(), new topEdge.TopEdge(), new bottomEdge.BottomEdge()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities, this);
    this.pipe = new pipeSystem.PipeSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities, this);
    this.input = new inputSystem.InputSystem(this.entities, this);
    this.garbage = new garbageSystem.GarbageSystem(this.entities);
    this.paused = false;
    document.getElementById('lastGameScore').innerText = localStorage.getItem('lastGameScore');

    console.log(localStorage.getItem('lastGameScore'));
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.garbage.run();
};

FlappyBird.prototype.pause = function() {
    if (!this.paused) {
        this.physics.pause();
        this.garbage.pause();
    } else {
        this.physics.run();
        this.garbage.run();
    }
    this.paused = !this.paused;
};

exports.FlappyBird = FlappyBird;