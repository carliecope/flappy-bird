var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/bird");
var collisionComponent = require("../components/collision/circle");
var leftEdge = require('./leftEdge');
var topEdge = require('./topEdge');
var bottomEdge = require('./bottomEdge');
var settings = require('../../settings');

var Bird = function(game) {
    
    this.isBird = true;
    this.isPipe_Check = false;
    this.game = game;
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = -2;
    console.log("physics x position", physics.position.x);

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, settings.birdRadius);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Bird.prototype.onCollision = function(entity, entities) {

    if (!entity.isPipe_Check) {
            entities.length = 0;
            entities.push(new Bird(this.game), new leftEdge.LeftEdge(), new topEdge.TopEdge(), new bottomEdge.BottomEdge()); 
            this.game.pause();
            document.getElementById('lastGameScore').innerText = this.game.pipe.score;
            document.getElementById('pipeCount').innerText = 0;
            localStorage.setItem('lastGameScore', this.game.pipe.score);
            this.game.pipe.score = 0;
    }
};

exports.Bird = Bird;
