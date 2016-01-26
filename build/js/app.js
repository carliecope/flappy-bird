!function i(t,n,s){function o(c,p){if(!n[c]){if(!t[c]){var h="function"==typeof require&&require;if(!p&&h)return h(c,!0);if(e)return e(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(i){var n=t[c][1][i];return o(n?n:i)},l,l.exports,i,t,n,s)}return n[c].exports}for(var e="function"==typeof require&&require,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(i,t,n){var s=function(i,t){this.entity=i,this.radius=t,this.type="circle"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.radius,o=i.components.collision.radius,e={x:t.x-n.x,y:t.y-n.y},c=e.x*e.x+e.y*e.y,p=s+o;return p*p>c},s.prototype.collideRect=function(i){var t=function(i,t,n){return t>i?t:i>n?n:i},n=this.entity.components.physics.position,s=i.components.physics.position,o=i.components.collision.size,e={x:t(n.x,s.x-o.x/2,s.x+o.x/2),y:t(n.y,s.y-o.y/2,s.y+o.y/2)},c=this.radius,p={x:n.x-e.x,y:n.y-e.y},h=p.x*p.x+p.y*p.y;return c*c>h},n.CircleCollisionComponent=s},{}],2:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t,this.type="rect"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},s.prototype.collideRect=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.size,o=i.components.collision.size,e=t.x-s.x/2,c=t.x+s.x/2,p=t.y-s.y/2,h=t.y+s.y/2,r=n.x-o.x/2,l=n.x+o.x/2,y=n.y-o.y/2,a=n.y+o.y/2;return!(e>l||r>c||p>a||y>h)},n.RectCollisionComponent=s},{}],3:[function(i,t,n){var s=function(i){this.entity=i};s.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.arc(0,0,.02,0,2*Math.PI),i.fill(),i.closePath(),i.restore()},n.BirdGraphicsComponent=s},{}],4:[function(i,t,n){var s=function(i){this.entity=i};s.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.rect(-.05,-.1,.1,.2),i.fill(),i.closePath(),i.restore()},n.PipeGraphicsComponent=s},{}],5:[function(i,t,n){var s=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};s.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},n.PhysicsComponent=s},{}],6:[function(i,t,n){var s=i("../components/physics/physics"),o=i("../components/graphics/bird"),e=i("../components/collision/circle"),c=function(){var i=new s.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2;var t=new o.BirdGraphicsComponent(this),n=new e.CircleCollisionComponent(this,.02);n.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:n}};c.prototype.onCollision=function(i){console.log("Bird collided with entity:",i),this.components.physics.position.y=.5,this.components.physics.velocity.y=0},n.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":5}],7:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(i){var t=new o.PhysicsComponent(this);t.position.x=.5,t.position.y=i,t.velocity.x=-.3;var n=new s.PipeGraphicsComponent(this),c=new e.RectCollisionComponent(this,{x:.1,y:.2});c.onCollision=this.onCollision.bind(this),this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){console.log("Pipe collided with entity:",i),console.log("collision on %",i.components.physics.position)},n.Pipe=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],8:[function(i,t,n){var s=i("./systems/graphics"),o=i("./systems/physics"),e=i("./systems/input"),c=i("./systems/pipe"),p=i("./entities/bird"),h=(i("./entities/pipe"),function(){this.entities=[new p.Bird],this.graphics=new s.GraphicsSystem(this.entities),this.physics=new o.PhysicsSystem(this.entities),this.input=new e.InputSystem(this.entities),this.pipe=new c.PipeSystem(this.entities)});h.prototype.run=function(){this.graphics.run(),this.physics.run(),this.input.run(),this.pipe.run()},n.FlappyBird=h},{"./entities/bird":6,"./entities/pipe":7,"./systems/graphics":11,"./systems/input":12,"./systems/physics":13,"./systems/pipe":14}],9:[function(i,t,n){var s=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var i=new s.FlappyBird;i.run()})},{"./flappy_bird":8}],10:[function(i,t,n){var s=function(i){this.entities=i};s.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if(!(!1 in t.components))for(var n=i+1;n<this.entities.length;n++){var s=this.entities[n];!1 in s.components||t.components.collision.collidesWith(s)&&(t.components.collision.onCollision&&t.components.collision.onCollision(s),s.components.collision.onCollision&&s.components.collision.onCollision(t))}}},n.CollisionSystem=s},{}],11:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};s.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},s.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=s},{}],12:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};s.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this))},s.prototype.onClick=function(){var i=this.entities[0];i.components.physics.velocity.y=.7},n.InputSystem=s},{}],13:[function(i,t,n){var s=i("./collision"),o=function(i){this.entities=i,this.collisionSystem=new s.CollisionSystem(i)};o.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},o.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.physics.update(1/60)}this.collisionSystem.tick()},n.PhysicsSystem=o},{"./collision":10}],14:[function(i,t,n){var s=i("../entities/pipe"),o=function(i){this.entities=i};o.prototype.run=function(){window.setInterval(this.tick.bind(this),2e3)},o.prototype.tick=function(){this.entities.push(new s.Pipe(0),new s.Pipe(.7))},n.PipeSystem=o},{"../entities/pipe":7}]},{},[9]);