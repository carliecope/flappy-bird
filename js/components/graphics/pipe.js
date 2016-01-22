var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;	

    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.rect(-0.05, 0.1, 0.1, 0.2);
    context.fill();
    context.closePath();
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;