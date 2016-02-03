var bird = require('../entities/bird');
var leftEdge = require('../entities/leftEdge');
var topEdge = require('../entities/topEdge');
var bottomEdge = require('../entities/bottomEdge');

var CollisionSystem = function(entities, game) {
    this.entities = entities;
    this.game = game;
};

CollisionSystem.prototype.tick = function() {
    //console.log('collisons system ticking');

    for (var i=0; i<this.entities.length; i++) {
        var entityA = this.entities[i];
        if (!'collision' in entityA.components) {
            continue;
        }

        for (var j=i+1; j<this.entities.length; j++) {
            var entityB = this.entities[j];
            if (!'collision' in entityB.components) {
                continue;
            }

            if (!entityA.components.collision.collidesWith(entityB)) {
                continue;
            }

            if (entityA.components.collision.onCollision) {
                entityA.components.collision.onCollision(entityB);
                if ((entityB.isBird && !entityA.isPipe_Check) || (entityA.isBird && !entityB.isPipe_Check)) {
                    this.reset();
                }
            }

            if (entityB.components.collision.onCollision) {
                entityB.components.collision.onCollision(entityA);
                if ((entityB.isBird && !entityA.isPipe_Check) || (entityA.isBird && !entityB.isPipe_Check)) {
                    this.reset();
                }
            }
        }
    }
};

CollisionSystem.prototype.reset = function() {
    this.entities.length = 0;
    this.game.entities = [new bird.Bird(), new leftEdge.LeftEdge(), new topEdge.TopEdge(), new bottomEdge.BottomEdge()];
};

exports.CollisionSystem = CollisionSystem;