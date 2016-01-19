var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    console.log("Drawing a bird");
    context.beginPath();
    context.arc(50, 50, 10, 0, 2 * Math.PI);
    context.fill();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;