//your JS code here. If required.
var audio = document.getElementById('audio');

function playSound(soundFile) {
    stopSound(); 
    audio.src = 'sounds/' + soundFile;
    audio.play();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
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
