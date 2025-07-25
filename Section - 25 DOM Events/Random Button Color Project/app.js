const myButtons = document.querySelectorAll('#btn');
const h1s = document.querySelectorAll('#h1');


function makeRandomColor() {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let newColor = `rgb( ${r}, ${g}, ${b} )`;
    return newColor;
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

for (let button of myButtons) {
    button.addEventListener('click', colorize);
}

for (let h of h1s) {
    h.addEventListener('click', colorize);
}