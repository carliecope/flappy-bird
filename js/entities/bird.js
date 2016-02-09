var physicsComponent = require("../components/physics/physics");
var graphicsComponent = require("../components/graphics/bird");
var collisionComponent = require("../components/collision/circle");
var leftEdge = require('./leftEdge');
var topEdge = require('./topEdge');
var bottomEdge = require('./bottomEdge');
//var settings = require("../settings");

var Bird = function() {
    console.log("the bird is here");
    this.isBird = true;
    this.isPipe_Check = false;
    this.pipeNum = 0;
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

Bird.prototype.onCollision = function(entity, entities) {
    if (entity.isPipe_Check) {
        this.pipeNum++;
        console.log("pipeNum is:" , this.pipeNum);
    } else {
        entities.length = 0;
        entities.push(new Bird(), new leftEdge.LeftEdge(), new topEdge.TopEdge(), new bottomEdge.BottomEdge()); 
    }
};

exports.Bird = Bird;
