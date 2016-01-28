var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/bird");
var collisionComponent = require("../components/collision/circle");
var flappyBird = require("../flappy_bird.js");
//var settings = require("../settings");

var Bird = function() {
    this.isBird = true;
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = -2;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Bird.prototype.onCollision = function(entity) {
    console.log("Bird collided with entity:", entity);
    if (entity.isBird = false) {
        flappyBird.FlappyBird.entities = [];
        flappyBird.FlappyBird.
        flappyBird.FlappyBird.pipe = [];
    }
};

exports.Bird = Bird;