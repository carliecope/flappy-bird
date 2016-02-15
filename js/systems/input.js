var InputSystem = function(entities, game) {
    this.entities = entities;
    this.game = game;

    // Canvas is where we get input from
    //this.canvas = document.getElementById('main-canvas');
    this.overlay = document.getElementById('overlay');
    this.physicsSystem = game.physics;
};

InputSystem.prototype.run = function() {
    this.overlay.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('keydown', this.checkKey.bind(this));
    //this.canvas.addEventListener('touchstart', this.touchstart.bind(this));
};

InputSystem.prototype.onClick = function() {
    if(this.game.paused) {
      this.game.pause();  
    }
    
    if(this.game.gameEnded) {
      this.game.gameOver();  
    }
    
    for (i=0; i<this.entities.length; i++) {
        if (this.entities[i].isBird) {
            var bird = this.entities[i];
            bird.components.physics.velocity.y = 0.7;
            console.log("bird y position:", bird.components.physics.position.y);
        }
    }
}; 

InputSystem.prototype.checkKey = function(e) {
    e = e || window.event;
    console.log('pause event');

    if (e.keyCode == 80) {
        this.game.pause();
    }
};

exports.InputSystem = InputSystem;
