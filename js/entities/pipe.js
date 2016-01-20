var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.y = ;
    
    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
        physics: physics,
        graphics: graphics
    };
};

exports.Pipe = Pipe;