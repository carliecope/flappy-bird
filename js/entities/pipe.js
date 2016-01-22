var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
//var settings = require("../settings");

var Pipe = function(y_coord) {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0.5;
	physics.position.y = y_coord;
	physics.velocity.x = -0.3;
    
    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    var collision = new collisionComponent.RectCollisionComponent(this, {x: 0.1, y: 0.2});
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Pipe.prototype.onCollision = function(entity) {
    console.log("Pipe collided with entity:", entity);
    console.log('collision on %', entity.components.physics.position);
};

exports.Pipe = Pipe;