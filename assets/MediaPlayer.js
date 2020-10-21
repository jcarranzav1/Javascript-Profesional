function MediaPlayer(config) {
  this.media = config.audio;
  
  this.plugins = config.plugins || [];
  this.initPlugins();
}

MediaPlayer.prototype.initPlugins = function () {
  console.log(this.plugins);
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.start = function () {
  // usan new,de esta manera se instancia el player con el objeto de mediaplayer
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.toggleButton = function () {
  if (this.media.paused) {
    this.start();
  } else {
    this.pause();
  }
};

/*********** CAMBIO DE MUTE-UMUTE CODIGO-1 */
/* MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.toggleSound = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};
Este fue mi primero codigo que hice para mute-unmute, pero ahora se que se puede reducir todo a una solo funcion, como la de abajo: */

MediaPlayer.prototype.toggleSound = function () {
  this.media.muted = !this.media.muted;
};

export default MediaPlayer;
/* export const foot ="bar" */
