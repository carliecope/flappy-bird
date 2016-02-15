var GarbageSystem = function(entities) {
	this.entities = entities;
	this.interval = null;
};
GarbageSystem.prototype.run = function() {
	this.interval = window.setInterval(this.tick.bind(this), 2000);
};

GarbageSystem.prototype.pause = function() {
	clearInterval(this.interval);
	this.interval = null;
};

GarbageSystem.prototype.gameOver = function() {
	clearInterval(this.interval);
	this.interval = null;
};

GarbageSystem.prototype.tick = function() {

	for (i = 0; i<this.entities.length; i++) {
		
		if (this.entities[i].garbage) {			
			this.entities.remove(i);
			i--;
		}
	}
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

exports.GarbageSystem = GarbageSystem;