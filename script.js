document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const restartGame = document.getElementById('restartGame');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    submitGuess.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            feedback.textContent = "Please enter a number between 1 and 100.";
        } else if (userGuess === randomNumber) {
            feedback.textContent = `Correct! You guessed it in ${attempts} attempts.`;
        } else if (userGuess < randomNumber) {
            feedback.textContent = "Too low! Try again.";
        } else {
            feedback.textContent = "Too high! Try again.";
        }
    });

    restartGame.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        feedback.textContent = "";
        guessInput.value = "";
    });
});
