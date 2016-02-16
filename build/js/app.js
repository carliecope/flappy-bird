!function t(i,e,n){function s(c,p){if(!e[c]){if(!i[c]){var h="function"==typeof require&&require;if(!p&&h)return h(c,!0);if(o)return o(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var a=e[c]={exports:{}};i[c][0].call(a.exports,function(t){var e=i[c][1][t];return s(e?e:t)},a,a.exports,t,i,e,n)}return e[c].exports}for(var o="function"==typeof require&&require,c=0;c<n.length;c++)s(n[c]);return s}({1:[function(t,i,e){var n=function(t,i){this.entity=t,this.radius=i,this.type="circle"};n.prototype.collidesWith=function(t){return"circle"==t.components.collision.type?this.collideCircle(t):"rect"==t.components.collision.type?this.collideRect(t):!1},n.prototype.collideCircle=function(t){var i=this.entity.components.physics.position,e=t.components.physics.position,n=this.radius,s=t.components.collision.radius,o={x:i.x-e.x,y:i.y-e.y},c=o.x*o.x+o.y*o.y,p=n+s;return p*p>c},n.prototype.collideRect=function(t){var i=function(t,i,e){return i>t?i:t>e?e:t},e=this.entity.components.physics.position,n=t.components.physics.position,s=t.components.collision.size,o={x:i(e.x,n.x-s.x/2,n.x+s.x/2),y:i(e.y,n.y-s.y/2,n.y+s.y/2)},c=this.radius,p={x:e.x-o.x,y:e.y-o.y},h=p.x*p.x+p.y*p.y;return c*c>h},e.CircleCollisionComponent=n},{}],2:[function(t,i,e){var n=function(t,i){this.entity=t,this.size=i,this.type="rect"};n.prototype.collidesWith=function(t){return"circle"==t.components.collision.type?this.collideCircle(t):"rect"==t.components.collision.type?this.collideRect(t):!1},n.prototype.collideCircle=function(t){return t.components.collision.collideRect(this.entity)},n.prototype.collideRect=function(t){var i=this.entity.components.physics.position,e=t.components.physics.position,n=this.size,s=t.components.collision.size,o=i.x-n.x/2,c=i.x+n.x/2,p=i.y-n.y/2,h=i.y+n.y/2,r=e.x-s.x/2,a=e.x+s.x/2,l=e.y-s.y/2,y=e.y+s.y/2;return!(o>a||r>c||p>y||l>h)},e.RectCollisionComponent=n},{}],3:[function(t,i,e){var n=t("../../../settings"),s=function(t){this.entity=t,this.image=document.getElementById("bird1")};s.prototype.draw=function(t){var i=this.entity.components.physics.position;t.save(),t.translate(i.x,i.y),t.rotate(Math.PI),t.scale(-1,1);this.image;t.drawImage(this.image,-n.birdRadius,-n.birdRadius,2*n.birdRadius,2*n.birdRadius),t.restore()},e.BirdGraphicsComponent=s},{"../../../settings":20}],4:[function(t,i,e){var n=t("../../../settings"),s=function(t){this.entity=t,this.image=document.getElementById("pipe")};s.prototype.draw=function(t){var i=this.entity.components.physics.position,e=this.entity.flip;t.save();var s=this.image;e?(t.translate(i.x-n.pipeWidth/2,i.y-n.pipeHeight/2),t.scale(1,-1),t.drawImage(s,0,0,n.pipeWidth,-n.pipeHeight),t.restore()):(t.translate(i.x-n.pipeWidth/2,i.y-n.pipeHeight/2),t.drawImage(s,0,0,n.pipeWidth,n.pipeHeight),t.restore())},e.PipeGraphicsComponent=s},{"../../../settings":20}],5:[function(t,i,e){var n=function(t){this.entity=t,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};n.prototype.update=function(t){this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t},e.PhysicsComponent=n},{}],6:[function(t,i,e){var n=t("../components/physics/physics"),s=t("../components/graphics/bird"),o=t("../components/collision/circle"),c=t("./leftEdge"),p=t("./topEdge"),h=t("./bottomEdge"),r=t("../../settings"),a=function(t){this.isBird=!0,this.isPipe_Check=!1,this.game=t;var i=new n.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2,console.log("physics x position",i.position.x);var e=new s.BirdGraphicsComponent(this),c=new o.CircleCollisionComponent(this,r.birdRadius);c.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:e,collision:c}};a.prototype.onCollision=function(t,i){if(!t.isPipe_Check){i.length=0,i.push(new a(this.game),new c.LeftEdge,new p.TopEdge,new h.BottomEdge),this.game.gameOver(),document.getElementById("lastGameScore").innerText=this.game.pipe.score,document.getElementById("pipeCount").innerText=0,localStorage.setItem("lastGameScore",this.game.pipe.score);var e=this.game.pipe.highScore;this.game.pipe.score>e&&(e=this.game.pipe.score,document.getElementById("highScore").innerText=e,localStorage.setItem("highScore",e)),this.game.pipe.score=0}},e.Bird=a},{"../../settings":20,"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":5,"./bottomEdge":7,"./leftEdge":8,"./topEdge":11}],7:[function(t,i,e){var n=t("../components/physics/physics"),s=t("../components/collision/rect"),o=function(){this.isBird=!1,this.isPipe_Check=!1;var t=new n.PhysicsComponent(this);t.position.x=0,t.position.y=-.05;var i=new s.RectCollisionComponent(this,{x:1,y:.1});i.onCollision=this.onCollision.bind(this),this.components={physics:t,collision:i}};o.prototype.onCollision=function(t){},e.BottomEdge=o},{"../components/collision/rect":2,"../components/physics/physics":5}],8:[function(t,i,e){var n=t("../components/physics/physics"),s=t("../components/collision/rect"),o=function(){this.isBird=!1,this.isPipe_Check=!1;var t=new n.PhysicsComponent(this);t.position.x=-1,t.position.y=.5;var i=new s.RectCollisionComponent(this,{x:.1,y:1});i.onCollision=this.onCollision.bind(this),this.components={physics:t,collision:i}};o.prototype.onCollision=function(t){t.isBird===!1&&(t.garbage=!0)},e.LeftEdge=o},{"../components/collision/rect":2,"../components/physics/physics":5}],9:[function(t,i,e){var n=t("../components/graphics/pipe"),s=t("../components/physics/physics"),o=t("../components/collision/rect"),c=t("../../settings"),p=function(t,i){this.isBird=!1,this.isPipe_Check=!1,this.flip=i;var e=new s.PhysicsComponent(this);e.position.x=.5,e.position.y=t,e.velocity.x=-.3;var p=new n.PipeGraphicsComponent(this),h=new o.RectCollisionComponent(this,{x:c.pipeWidth,y:c.pipeHeight});h.onCollision=this.onCollision.bind(this),this.components={physics:e,graphics:p,collision:h}};p.prototype.onCollision=function(t){},e.Pipe=p},{"../../settings":20,"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],10:[function(t,i,e){var n=(t("../components/graphics/pipe"),t("../components/physics/physics")),s=t("../components/collision/rect"),o=t("../../settings"),c=function(){this.isBird=!1,this.isPipe_Check=!0,this.hasScored=!1;var t=new n.PhysicsComponent(this);t.position.x=.5,t.position.y=.5,t.velocity.x=-.3;var i=new s.RectCollisionComponent(this,{x:o.pipeWidth,y:1});i.onCollision=this.onCollision.bind(this),this.components={physics:t,collision:i}};c.prototype.onCollision=function(t){},e.Pipe_Checkpoint=c},{"../../settings":20,"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],11:[function(t,i,e){var n=t("../components/physics/physics"),s=t("../components/collision/rect"),o=function(){this.isBird=!1,this.isPipe_Check=!1;var t=new n.PhysicsComponent(this);t.position.x=0,t.position.y=1.05;var i=new s.RectCollisionComponent(this,{x:1,y:.1});i.onCollision=this.onCollision.bind(this),this.components={physics:t,collision:i}};o.prototype.onCollision=function(t){},e.TopEdge=o},{"../components/collision/rect":2,"../components/physics/physics":5}],12:[function(t,i,e){var n=t("./systems/graphics"),s=t("./systems/physics"),o=t("./systems/input"),c=t("./systems/pipe"),p=t("./systems/garbage"),h=t("./entities/bird"),r=(t("./entities/pipe"),t("./entities/leftEdge")),a=t("./entities/topEdge"),l=t("./entities/bottomEdge"),y=function(){this.entities=[new h.Bird(this),new r.LeftEdge,new a.TopEdge,new l.BottomEdge],this.graphics=new n.GraphicsSystem(this.entities,this),this.pipe=new c.PipeSystem(this.entities),this.physics=new s.PhysicsSystem(this.entities,this),this.input=new o.InputSystem(this.entities,this),this.garbage=new p.GarbageSystem(this.entities),this.paused=!1,this.gameEnded=!1,document.getElementById("lastGameScore").innerText=localStorage.getItem("lastGameScore"),console.log(localStorage.getItem("lastGameScore"))};y.prototype.run=function(){this.graphics.run(),this.physics.run(),this.input.run(),this.garbage.run()},y.prototype.pause=function(){console.log("pause called"),this.paused?(this.physics.run(),this.garbage.run(),document.getElementById("scoreboard").setAttribute("style","display:none;")):(this.physics.pause(),this.garbage.pause(),document.getElementById("scoreboard").removeAttribute("style"),document.getElementById("startBtn").setAttribute("style","display:none;"),document.getElementById("pauseBtn").removeAttribute("style"),document.getElementById("startEndHeading").setAttribute("style","display:none;"),document.getElementById("pauseUnpauseHeading").removeAttribute("style")),this.paused=!this.paused},y.prototype.gameOver=function(){console.log("gameOver called"),this.gameEnded?"Start Flying!"==document.getElementById("startBtn").innerText&&(this.physics.run(),this.garbage.run(),document.getElementById("scoreboard").setAttribute("style","display:none;"),this.gameEnded=!this.gameEnded):(this.physics.gameOver(),this.garbage.gameOver(),document.getElementById("startBtn").innerHTML="3",this.interval=window.setInterval(d.bind(this),1e3),document.getElementById("scoreboard").removeAttribute("style"),document.getElementById("startBtn").removeAttribute("style"),document.getElementById("pauseBtn").setAttribute("style","display:none;"),document.getElementById("startEndHeading").removeAttribute("style"),document.getElementById("pauseUnpauseHeading").setAttribute("style","display:none;"),this.gameEnded=!this.gameEnded)};var d=function(){var t=document.getElementById("startBtn").innerHTML;t>=1&&t--,document.getElementById("startBtn").innerHTML=t,0===t&&(clearInterval(this.interval),document.getElementById("startBtn").innerHTML="Start Flying!")};e.FlappyBird=y},{"./entities/bird":6,"./entities/bottomEdge":7,"./entities/leftEdge":8,"./entities/pipe":9,"./entities/topEdge":11,"./systems/garbage":15,"./systems/graphics":16,"./systems/input":17,"./systems/physics":18,"./systems/pipe":19}],13:[function(t,i,e){var n=t("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var t=new n.FlappyBird;t.run(),t.gameOver()})},{"./flappy_bird":12}],14:[function(t,i,e){var n=(t("../entities/bird"),t("../entities/leftEdge"),t("../entities/topEdge"),t("../entities/bottomEdge"),function(t,i){this.entities=t,this.game=i});n.prototype.tick=function(){for(var t=0;t<this.entities.length;t++){var i=this.entities[t];if(!(!1 in i.components))for(var e=t+1;e<this.entities.length;e++){var n=this.entities[e];!1 in n.components||i.components.collision.collidesWith(n)&&(i.components.collision.onCollision&&i.components.collision.onCollision(n,this.entities),n.components.collision.onCollision&&n.components.collision.onCollision(i,this.entities))}}},e.CollisionSystem=n},{"../entities/bird":6,"../entities/bottomEdge":7,"../entities/leftEdge":8,"../entities/topEdge":11}],15:[function(t,e,n){var s=function(t){this.entities=t,this.interval=null};s.prototype.run=function(){this.interval=window.setInterval(this.tick.bind(this),2e3)},s.prototype.pause=function(){clearInterval(this.interval),this.interval=null},s.prototype.gameOver=function(){clearInterval(this.interval),this.interval=null},s.prototype.tick=function(){for(i=0;i<this.entities.length;i++)this.entities[i].garbage&&(this.entities.remove(i),i--)},Array.prototype.remove=function(t,i){var e=this.slice((i||t)+1||this.length);return this.length=0>t?this.length+t:t,this.push.apply(this,e)},n.GarbageSystem=s},{}],16:[function(t,i,e){var n=function(t,i){this.entities=t,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};n.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},n.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var t=0;t<this.entities.length;t++){var i=this.entities[t];i.components.graphics&&i.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},e.GraphicsSystem=n},{}],17:[function(t,e,n){var s=function(t,i){this.entities=t,this.game=i,this.startBtn=document.getElementById("startBtn"),this.pauseBtn=document.getElementById("pauseBtn"),this.overlay=document.getElementById("overlay"),this.physicsSystem=i.physics};s.prototype.run=function(){this.startBtn.addEventListener("click",this.onClickStart.bind(this)),this.pauseBtn.addEventListener("click",this.onClickPause.bind(this)),document.addEventListener("keydown",this.checkKeyP.bind(this)),this.lift()},s.prototype.lift=function(){this.overlay.addEventListener("click",this.onClickOverlay.bind(this)),document.addEventListener("keydown",this.checkKeySpaceUp.bind(this))},s.prototype.onClickOverlay=function(){if(console.log("onClickOverlay called"),!this.game.paused&&!this.game.gameEnded)for(i=0;i<this.entities.length;i++)if(this.entities[i].isBird){var t=this.entities[i];t.components.physics.velocity.y=.7,console.log("bird y position:",t.components.physics.position.y)}},s.prototype.onClickPause=function(){console.log("onClickPause called"),this.game.paused&&this.game.pause()},s.prototype.onClickStart=function(){console.log("onClickStart called"),this.game.gameEnded&&this.game.gameOver()},s.prototype.checkKeyP=function(t){t=t||window.event,80==t.keyCode&&this.game.pause()},s.prototype.checkKeySpaceUp=function(t){if(t=t||window.event,!(this.game.paused||this.game.gameEnded||32!=t.keyCode&&33!=t.keyCode))for(i=0;i<this.entities.length;i++)if(this.entities[i].isBird){var e=this.entities[i];e.components.physics.velocity.y=.7,console.log("bird y position:",e.components.physics.position.y)}},n.InputSystem=s},{}],18:[function(t,i,e){var n=t("./collision"),s=function(t,i){this.entities=t,this.pipe=i.pipe,this.collisionSystem=new n.CollisionSystem(t,i),this.interval=null,this.tickCount=0};s.prototype.run=function(){this.interval=window.setInterval(this.tick.bind(this),1e3/60)},s.prototype.pause=function(){clearInterval(this.interval),this.interval=null},s.prototype.gameOver=function(){clearInterval(this.interval),this.interval=null,this.tickCount=0},s.prototype.tick=function(){this.tickCount++;for(var t=0;t<this.entities.length;t++){var i=this.entities[t];!1 in i.components||i.components.physics.update(1/60)}this.collisionSystem.tick(),120==this.tickCount&&(console.log("tickCount is 120"),this.pipe.tick(),this.tickCount=0),this.pipe.pipesPassed()},e.PhysicsSystem=s},{"./collision":14}],19:[function(t,e,n){var s=t("../entities/pipe"),o=t("../entities/pipe_checkpoint"),c=t("../../settings"),p=function(t){this.entities=t,this.score=0,this.highScore=localStorage.getItem("highScore"),(null===this.highScore||void 0===this.highScore)&&(this.highScore=0)};p.prototype.tick=function(){var t=Math.randomRange(-.25,.25);this.entities.push(new s.Pipe(0+t,!0),new s.Pipe(1+t,!1),new o.Pipe_Checkpoint)},p.prototype.pipesPassed=function(){for(i=0;i<this.entities.length;i++)this.entities[i].isPipe_Check&&!this.entities[i].hasScored&&this.entities[i].components.physics.position.x<-c.birdRadius&&(this.score++,this.entities[i].hasScored=!0,console.log(this.score),document.getElementById("pipeCount").innerText=this.score)},Math.randomRange=function(t,i){return t+Math.random()*(i-t)},n.PipeSystem=p},{"../../settings":20,"../entities/pipe":9,"../entities/pipe_checkpoint":10}],20:[function(t,i,e){e.birdRadius=.03,e.pipeWidth=.18,e.pipeHeight=.6,e.gravity=1,e.lift=.5},{}]},{},[13]);