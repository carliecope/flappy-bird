var InputSystem = function(entities, game) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
    this.physicsSystem = game.physics;
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
    this.canvas.addEventListener('keydown', this.checkKey.bind(this));
    //this.canvas.addEventListener('touchstart', this.touchstart.bind(this));
};

InputSystem.prototype.onClick = function() {
    
    for (i=0; i<this.entities.length; i++) {
        if (this.entities[i].isBird) {
            var bird = this.entities[i];
            bird.components.physics.velocity.y = 0.7;
        }
    }
}; 

InputSystem.prototype.checkKey = function(e) {
    e = e || window.event;

    if (e.keyCode == 80) {
        this.physicsSystem.pause = !this.physicsSystem.pause;
    }
};

exports.InputSystem = InputSystem;
