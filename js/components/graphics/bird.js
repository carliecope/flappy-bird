var settings = require('../../../settings');

var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = document.getElementById("bird1");
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    
    context.translate(position.x, position.y);
    context.rotate(Math.PI);
    context.scale(-1, 1);

    context.beginPath();
    //arc.(x coord start, y coord start, radius, start angle, end angle)
    context.arc(0, 0, settings.birdRadius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    var image = this.image;
    //drawImage(x coord of top-left corner of img, y coord [top-left], width, height)
    context.drawImage(image, -settings.birdRadius, -settings.birdRadius, settings.birdRadius*2, settings.birdRadius*2);
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;