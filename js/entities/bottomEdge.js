var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
//var settings = require("../settings");

var BottomEdge = function() {
	this.isBird = false;
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0;
	physics.position.y = 0;

	var collision = new collisionComponent.RectCollisionComponent(this, {x: 0.1, y: 1});
    collision.onCollision = this.onCollision.bind(this);

        this.components = {
        physics: physics,
        collision: collision
    };
};

BottomEdge.prototype.onCollision = function(entity) {
    //console.log("Bottom edge collided with entity:", entity);
};

exports.BottomEdge = BottomEdge;