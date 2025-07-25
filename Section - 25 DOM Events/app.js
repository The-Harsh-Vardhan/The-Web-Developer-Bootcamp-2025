const myButton = document.querySelector('#v2');
myButton.onclick = function() {
    console.log("You Clicked Me!");
    console.log("I Hope it worked.")
}

function scream() {
    console.log("AAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}

myButton.onmouseenter = scream; //We are not executing scream, we are just passing it, so whatever is there will be executed.

document.querySelector('h1').onclick = function () {
    alert("You clicled the H1");
}

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)