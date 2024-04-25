function playSound(soundName) {
    var audio = new Audio('sounds/' + soundName + '.mp3');
    audio.play();
}

function stopAllSounds() {
    var sounds = document.getElementsByTagName('audio');
    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}
