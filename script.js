var audio = document.getElementById('audio');

function playSound(soundFile) {
    stopSound(); // Stop any currently playing sound
    audio.src = 'sounds/' + soundFile;
    audio.play().catch(function(error) {
        console.error('Failed to play audio:', error);
    });
}

function stopSound() {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var soundFile = this.getAttribute('onclick').split("'")[1];
            if (soundFile) {
                playSound(soundFile);
            }
        });
    }
});
