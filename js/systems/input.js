var InputSystem = function(entities, game) {
    this.entities = entities;
    this.game = game;

    this.startBtn = document.getElementById('startBtn');
    this.pauseBtn = document.getElementById('pauseBtn');
    this.overlay = document.getElementById('overlay');
    this.physicsSystem = game.physics;
};

InputSystem.prototype.run = function() {
    this.startBtn.addEventListener('click', this.onClickStart.bind(this));
    this.pauseBtn.addEventListener('click', this.onClickPause.bind(this));
    document.addEventListener('keydown', this.checkKeyP.bind(this));
    this.lift();
};

InputSystem.prototype.lift = function() {
    this.overlay.addEventListener('click', this.onClickOverlay.bind(this));
    document.addEventListener('keydown', this.checkKeySpaceUp.bind(this));
};

InputSystem.prototype.onClickOverlay = function() {
    
    if(!this.game.paused && !this.game.gameEnded) {
        for (i=0; i<this.entities.length; i++) {
            if (this.entities[i].isBird) {
                var bird = this.entities[i];
                bird.components.physics.velocity.y = 0.7;
                console.log("bird y position:", bird.components.physics.position.y);
            }
        }  
    }
};

InputSystem.prototype.onClickPause = function() {
    if(this.game.paused) {
      this.game.pause();  
    }
};
InputSystem.prototype.onClickStart = function() {
    if(this.game.gameEnded) {
      this.game.gameOver();  
    }
};  

InputSystem.prototype.checkKeyP = function(e) {
    e = e || window.event;

    if (e.keyCode == 80) {
        this.game.pause();
    }
};

InputSystem.prototype.checkKeySpaceUp = function(e) {
    e = e || window.event;

    if(!this.game.paused && !this.game.gameEnded) {
        if (e.keyCode == 32) {
            for (i=0; i<this.entities.length; i++) {
                if (this.entities[i].isBird) {
                    var bird = this.entities[i];
                    bird.components.physics.velocity.y = 0.7;
                    console.log("bird y position:", bird.components.physics.position.y);
                }
            }
        }
    }
};

exports.InputSystem = InputSystem;
