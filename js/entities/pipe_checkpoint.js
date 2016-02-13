var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var settings = require('../../settings');

var Pipe_Checkpoint = function() {
    this.isBird = false;
    this.isPipe_Check = true;
    this.hasScored = false;
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0.5;
	physics.position.y = 0.5;
	physics.velocity.x = -0.3;
    
    var collision = new collisionComponent.RectCollisionComponent(this, {x: settings.pipeWidth, y: 1});
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
        physics: physics,
        collision: collision
    };
};

Pipe_Checkpoint.prototype.onCollision = function(entity) {
    //console.log("Pipe_Checkpoint collided with entity:", entity);
};

exports.Pipe_Checkpoint = Pipe_Checkpoint;