const p1_button = document.querySelector('#player1_button');
const p2_button = document.querySelector('#player2_button');
const p1_display = document.querySelector('#player1_display');
const p2_display = document.querySelector('#player2_display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1_button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1_display.classList.add('winner');
            p2_display.classList.add('loser');
        }
        p1_display.textContent = p1Score;
    }
});

p2_button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2_display.classList.add('winner');
            p1_display.classList.add('loser');
        }
        p2_display.textContent = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    reset(); 
});

resetButton.addEventListener('click', reset);

function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1_display.textContent = 0;
    p2_display.textContent = 0;
    p1_display.classList.remove('winner', 'loser');
    p2_display.classList.remove('winner', 'loser');
}