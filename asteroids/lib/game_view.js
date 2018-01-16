const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.game.moveObjects.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game, this.ctx), 20);
  setInterval(this.game.step.bind(this.game), 20);
  // this.game.draw(this.ctx);
};



module.exports = GameView;