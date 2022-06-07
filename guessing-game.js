function guessingGame() {
  const number = Math.random() * 100;
  let tried = 0;
  let won = false;
  return function (guess) {
    if (won) return "The game is over, you already won!";
    tried++;
    if (guess === number) {
      won = true;
      return `You win! You found ${number} in ${tried} guesses.`;
    } else if (guess < number) return `${guess} is too low!`;
    else return `${guess} is too high!`;
  };
}

module.exports = { guessingGame };
