var pipe = require('../entities/pipe');
var pipe_checkpoint = require('../entities/pipe_checkpoint');
var settings = require('../../settings');

var PipeSystem = function(entities) {
    this.entities = entities;
    this.score = 0;
    
    this.highScore = localStorage.getItem('highScore');
    document.getElementById("highScore").innerText = this.highScore;
    if (this.highScore === null || this.highScore === undefined) {
    	this.highScore = 0;
    }
};

PipeSystem.prototype.tick = function() {

	var offset = Math.randomRange(-0.25, 0.25);
	this.entities.push(new pipe.Pipe(0+offset, true), new pipe.Pipe(1+offset, false), new pipe_checkpoint.Pipe_Checkpoint());
};

PipeSystem.prototype.pipesPassed = function() {
	
	for(i=0; i < this.entities.length; i++) {
		if (this.entities[i].isPipe_Check && !this.entities[i].hasScored && this.entities[i].components.physics.position.x < -settings.birdRadius) {
			this.score++;
			this.entities[i].hasScored = true;
			document.getElementById('pipeCount').innerText = this.score;
		}
	}
}; 

Math.randomRange = function(min,max) {
	  return min + (Math.random() * (max-min));
};

exports.PipeSystem = PipeSystem;