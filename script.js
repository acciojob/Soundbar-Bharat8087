function playSound(soundName) {
    var audio = document.createElement('audio');
    audio.src = 'sounds/' + soundName + '.mp3';
    audio.play();
    document.body.appendChild(audio);
}

function stopAllSounds() {
    var sounds = document.getElementsByTagName('audio');
    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
        document.body.removeChild(sounds[i]); // Remove audio elements from DOM
    }
}
