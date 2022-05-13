const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const phrase = 'I Love Programming...';

let x = 1;
let speed = 300 / speedElement.value;

writeText();

function writeText() {
    textElement.innerText = phrase.slice(0, x);

    x++;

    if (x > phrase.length) {

        x = 1;

    }

    setTimeout(writeText, speed);
}


speedElement.addEventListener('input', (e) => speed = 300 / e.target.value);