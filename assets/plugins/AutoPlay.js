function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  player.toggleSound();
  player.start();
};
export default AutoPlay;
