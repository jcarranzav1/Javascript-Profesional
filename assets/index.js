/* import MediaPlayer , {footer} from './MediaPlayer.js'; */

import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  audio: video,
  plugins: [
    //new AutoPlay()
  ],
});
// usan new,de esta manera se instancia el player con el objeto de mediaplayer

const button = document.querySelector('#Play-Stop');
button.onclick = () => player.toggleButton();

const muteUnmute = document.querySelector('#Mute-Unmute');
muteUnmute.onclick = () => player.toggleSound();
