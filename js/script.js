function playSound(keyCode) {
  var audio = document.querySelector(`audio[data-key="${keyCode}"]`); // select the audio element with the given keyCode
  var key = document.querySelector(`.key[data-key="${keyCode}"]`);    // select the element with a class of "key" and the given keyCode
  if (!audio) { // if there isn't an audio element with given key...
    return;     // stop the function from running
  }
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return; // ignore it if it's not a transform
  }
  this.classList.remove('playing');
}

// wait for click on div.key, then play sound and perform transitions
var clickedKey = document.querySelectorAll('.key');
clickedKey.forEach(key => key.addEventListener('click', function(e) {
  playSound (this.dataset.key);
  //console.log(this.dataset.key);
}));

// wait for key to be pressed, then play sound and perform transitions
window.addEventListener('keydown', function(event) {
  playSound(event.keyCode);
});

// wait for transition to end, then remove it
var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));