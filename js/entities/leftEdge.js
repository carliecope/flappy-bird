var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");
//var settings = require("../settings");

var LeftEdge = function() {
	this.isBird = false;
    this.isPipe_Check = false;
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = -1;
	physics.position.y = 0.5;

	var collision = new collisionComponent.RectCollisionComponent(this, {x: 0.1, y: 1});
    collision.onCollision = this.onCollision.bind(this);

        this.components = {
        physics: physics,
        collision: collision
    };
};

LeftEdge.prototype.onCollision = function(entity) {
    //console.log("Left edge collided with entity:", entity);
    if (entity.isBird === false) {
        entity.garbage = true;
    }
};

exports.LeftEdge = LeftEdge;