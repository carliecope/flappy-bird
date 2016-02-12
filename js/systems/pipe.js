var pipe = require('../entities/pipe');
var pipe_checkpoint = require('../entities/pipe_checkpoint');
var settings = require('../../settings');

var PipeSystem = function(entities) {
    this.entities = entities;
    this.score = 0;

};

 /* PipeSystem.prototype.run = function() {
    // Run the update loop
    this.interval = window.setInterval(this.tick.bind(this), 2000);
}; */

PipeSystem.prototype.tick = function() {
	
	var offset = settings.math.randomRange(0.25, 0.65),
	this.entities.push(new pipe.Pipe(0), new pipe.Pipe(1), new pipe_checkpoint.Pipe_Checkpoint());
};

PipeSystem.prototype.pipesPassed = function() {
	
	for(i=0; i < this.entities.length; i++) {
		if (this.entities[i].isPipe_Check && !this.entities[i].hasScored && this.entities[i].components.physics.position.x < -settings.birdRadius) {
			this.score++;
			this.entities[i].hasScored = true;
			console.log(this.score);
			document.getElementById('pipeCount').innerText = this.score;
		}
	}
}; 

exports.PipeSystem = PipeSystem;