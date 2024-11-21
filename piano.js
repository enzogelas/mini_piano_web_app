const keyToAudio = {
    'q': 'audio/C4.mp3',
    'z': 'audio/Db4.mp3',
    's': 'audio/D4.mp3',
    'e': 'audio/Eb4.mp3',
    'd': 'audio/E4.mp3',
    'f': 'audio/F4.mp3',
    't': 'audio/Gb4.mp3',
    'g': 'audio/G4.mp3',
    'y': 'audio/Ab4.mp3',
    'h': 'audio/A4.mp3',
    'u': 'audio/Bb4.mp3',
    'j': 'audio/B4.mp3'
};

const pianoKeyMapping = {
    "q": 1,
    "z": 2,
    "s": 3,
    "e": 4,
    "d": 5,
    "f": 6,
    "t": 7,
    "g": 8,
    "y": 9,
    "h": 10,
    "u": 11,
    "j": 12,
};

function keyToPianoId(key){
    return pianoKeyMapping[key];
}

function highlightElement(element) {
    element.classList.add("highlighted");
}

// Function to remove highlight from the SVG element on mouse leave
function removeHighlight(element) {
    element.classList.remove("highlighted");
}

function playSound(key) {
    const audio = document.getElementById(key);
    console.log(audio);
    audio.play();
}

document.addEventListener('keypress', function(event) {
    const key = event.key;
    // highlight pressed key
    let id = keyToPianoId(key);
    if(id != 0){
        highlightElement(piano.getElementById(id));
        playSound(key);
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key;
    //remove highlight
    let id = keyToPianoId(key);
    if(id != 0){
        removeHighlight(piano.getElementById(id));
    }
});

let bodyElement = document.getElementsByTagName("body")[0];

for (key of Object.keys(keyToAudio)){
    let newAudio = document.createElement("audio");
    console.log(key);
    newAudio.id = key;
    newAudio.src = keyToAudio[key];
    newAudio.preload = "auto";

    bodyElement.appendChild(newAudio);
}

let titleElement = document.getElementById("main_title");
titleElement.textContent = "Play what you want !";