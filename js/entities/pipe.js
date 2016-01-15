var graphicsComponent = require("../components/graphics/pipe");

var Pipe = function() {
    console.log("Creating Bird entity");

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    this.components = {
        graphics: graphics
    };
};

exports.Pipe = Pipe;