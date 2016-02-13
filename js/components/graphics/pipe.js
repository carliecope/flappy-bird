var settings = require('../../../settings');

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = document.getElementById("pipe");
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;	

    context.save();

    //fillRect(x coord starting point, y coord starting point, width, height)
    //context.fillRect(position.x-settings.pipeWidth/2, position.y-settings.pipeHeight/2, settings.pipeWidth, settings.pipeHeight);
    
    context.translate(position.x-settings.pipeWidth/2, position.y-settings.pipeHeight/2);

    var image = this.image;
    //drawImage(x coord of top-left corner of img, y coord [top-left], width, height)
    context.drawImage(image, 0, 0, settings.pipeWidth, settings.pipeHeight);
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;