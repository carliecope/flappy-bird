var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
//var settings = require("../settings");

var TopEdge = function() {
	this.isBird = false;
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0;
	physics.position.y = 1.05;

	var collision = new collisionComponent.RectCollisionComponent(this, {x: 1, y: 0.1});
    collision.onCollision = this.onCollision.bind(this);

        this.components = {
        physics: physics,
        collision: collision
    };
};

TopEdge.prototype.onCollision = function(entity) {
    //console.log("Top edge collided with entity:", entity);
};

exports.TopEdge = TopEdge;