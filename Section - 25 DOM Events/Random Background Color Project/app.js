const myButton = document.querySelector("#btn");
const myBody = document.querySelector("body");
const h1 = document.querySelector("h1");

function changeColor() {
    console.log("Colour Changed!");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const newColor = `rgb( ${r}, ${g}, ${b} )`;
    myBody.setAttribute( 'bgcolor' , newColor);
    h1.innerText = newColor;
}

myButton.addEventListener('click', changeColor )