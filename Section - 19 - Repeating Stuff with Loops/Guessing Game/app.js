console.log("Hello this a Guessing Game!");
console.log("Let's us start with the Game!");

let maximum = parseInt(prompt("Enter the highest number!"));
while(!maximum) { //NaN i.e. Not a number happends to be falsy
    maximum = parseInt(prompt("Enter a valid Number!"));
}

//Generating a random secret number
const targetNum = (Math.floor(Math.random()) * maximum) + 1;
// console.log(targetNum)

let guess = prompt("Enter your first guess! (Type 'q' to quit the game)");
let attempts = 1;

while(parseInt(guess) != targetNum) {
    if(guess === "q") break;
    guess = parseInt(guess)
    if(guess > targetNum) {
        guess = prompt("Too High! Try Again: ");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too Low! Try Again");
        attempts++;
    } else {
        guess = prompt("Invalid Guess! Please enter a number or 'q' to quit!");
    }
}

if(guess === "q") {
    console.log("OK, You Quit.")
} else {
    console.log(`Yay!! You Got it! It took you ${attempts} guesses`);
}