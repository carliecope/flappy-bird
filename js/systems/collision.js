var bird = require('../entities/bird');
var leftEdge = require('../entities/leftEdge');
var topEdge = require('../entities/topEdge');
var bottomEdge = require('../entities/bottomEdge');

var CollisionSystem = function(entities, game) {
    this.entities = entities;
    this.game = game;
};

CollisionSystem.prototype.tick = function() {

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
                entityA.components.collision.onCollision(entityB, this.entities);

            }

            if (entityB.components.collision.onCollision) {
                entityB.components.collision.onCollision(entityA, this.entities);
            }
        }
    }
};

exports.CollisionSystem = CollisionSystem;