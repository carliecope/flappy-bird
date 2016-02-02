var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;	

    context.save();
    context.fillRect(position.x-0.05, position.y-0.1, 0.1, 0.2);
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;