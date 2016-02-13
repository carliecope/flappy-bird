var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
var settings = require('../../settings');

var Pipe = function(y_coord) {
    this.isBird = false;
    this.isPipe_Check = false;
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0.5;
	physics.position.y = y_coord;
	physics.velocity.x = -0.3; 
    
    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    var collision = new collisionComponent.RectCollisionComponent(this, {x: settings.pipeWidth, y: settings.pipeHeight});
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Pipe.prototype.onCollision = function(entity) {
    //console.log("Pipe collided with entity:", entity);
};

exports.Pipe = Pipe;