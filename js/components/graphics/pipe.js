var settings = require('../../../settings');

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;	

    context.save();
    //fillRect(x coord starting point, y coord starting point, width, height)
    context.fillRect(position.x-settings.pipeWidth/2, position.y-0.1, settings.pipeWidth, 0.2);
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;