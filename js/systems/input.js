var InputSystem = function(entities, entity) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
    //this.canvas.addEventListener('keydown', this.keyDown.bind(this));
    //this.canvas.addEventListener('touchstart', this.touchstart.bind(this));
};

InputSystem.prototype.onClick = function() {
    
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.7;
}; 

/* 
InputSystem.prototype.keydown = function(e) {
    if (e.keycode === 80) {

    }
};
*/

exports.InputSystem = InputSystem;
