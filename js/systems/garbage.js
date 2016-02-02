var GarbageSystem = function(entities) {
	this.entities = entities;
};
GarbageSystem.prototype.run = function() {
	window.setInterval(this.tick.bind(this), 2000);
};

GarbageSystem.prototype.tick = function() {

	for (i = 0; i<this.entities.length; i++) {
		
		if (this.entities[i].garbage) {
			console.log('entity removed');
			
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