const sounds = {
    65: new Audio("./sounds/clap.wav"),
    83: new Audio("./sounds/hihat.wav"),
    68: new Audio("./sounds/kick.wav"),
    70: new Audio("./sounds/openhat.wav"),
    71: new Audio("./sounds/boom.wav"),
    72: new Audio("./sounds/ride.wav"),
    74: new Audio("./sounds/snare.wav"),
    75: new Audio("./sounds/tom.wav"),
    76: new Audio("./sounds/tink.wav")
};
const keys = document.querySelectorAll('.key');

const playSound = (event) => {
    const keyCode = event.keyCode;
    const sound = sounds[keyCode];
    const key = document.querySelector(`.key[data-key='${keyCode}']`);

    if (sound && key) {
        key.classList.add('playing');
        sound.currentTime = 0;
        sound.play();
    }
}

const removeTransition = (event) => {
    event.propertyName !== 'transform' && event.srcElement.classList.remove("playing");
}

document.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));