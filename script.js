//your JS code here. If required.
var audio = document.getElementById('audio');

function playSound(soundFile) {
    stopSound(); // Stop any currently playing sound
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
            var onclickAttr = this.getAttribute('onclick');
            var soundFile = extractSoundFileName(onclickAttr);
            if (soundFile) {
                playSound(soundFile);
            }
        });
    }
    
    var stopButton = document.getElementsByClassName('stop')[0];
    stopButton.addEventListener('click', stopSound);
});

function extractSoundFileName(onclickAttr) {
    var match = onclickAttr.match(/'([^']+)'/);
    return match ? match[1] : null;
}
