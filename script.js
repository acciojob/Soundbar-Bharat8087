//your JS code here. If required.
const audioElement = document.getElementById('audio');

function playSound(sound) {
  audioElement.src = `sounds/${sound}`;
  audioElement.play();
}

function stopSound() {
  audioElement.pause();
  audioElement.currentTime = 0;
}
