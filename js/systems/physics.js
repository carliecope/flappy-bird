var collisionSystem = require("./collision");

var PhysicsSystem = function(entities, game) {
    this.entities = entities;
    this.pipe = game.pipe;
    this.collisionSystem = new collisionSystem.CollisionSystem(entities, game);
    this.interval = null;
    this.tickCount = 0;
};

PhysicsSystem.prototype.run = function() {
    // Run the update loop
    this.interval = window.setInterval(this.tick.bind(this), 1000 /60);
};

PhysicsSystem.prototype.pause = function() {
   clearInterval(this.interval);
   this.interval = null;
}; 

PhysicsSystem.prototype.tick = function() {
    
    this.tickCount++;

    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'physics' in entity.components) {
            continue;
        }

        entity.components.physics.update(1/60);
    }
    this.collisionSystem.tick();
    
    if (this.tickCount == 120) {
        console.log('tickCount is 120');
        this.pipe.tick();
        this.tickCount = 0;
    }
};

exports.PhysicsSystem = PhysicsSystem;