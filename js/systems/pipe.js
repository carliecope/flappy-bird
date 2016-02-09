var pipe = require('../entities/pipe');
var pipe_checkpoint = require('../entities/pipe_checkpoint');

var PipeSystem = function(entities) {
    this.entities = entities;
};

 /* PipeSystem.prototype.run = function() {
    // Run the update loop
    this.interval = window.setInterval(this.tick.bind(this), 2000);
}; */

PipeSystem.prototype.tick = function() {
	
	this.entities.push(new pipe.Pipe(0), new pipe.Pipe(1), new pipe_checkpoint.Pipe_Checkpoint());

};

PipeSystem.prototype.pipeYCoord = function() {

  return Math.random() * (0.65 - 0.1) + 0.1;
};

exports.PipeSystem = PipeSystem;