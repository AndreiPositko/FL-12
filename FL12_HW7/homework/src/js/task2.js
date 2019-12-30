let randomStage;
let startLevelStage = 8;
let nextLevelStage = 12;
let random;
let attempts;
let allowAttempts = 3;
let prize;
let totalPrize;
let maxStartPrize = 100;
let maxNextPrize = 200;
let askForChoice;
let changePrize = 2;
let playGame;

confirm('Do you want to play a game?')
  ? playGame = true
  : alert('You did not become a billionaire, but can.');
console.log(playGame);

if (playGame) {
  randomStage = startLevelStage;
  random = Math.floor(Math.random() * (randomStage + 1));
  prize = maxStartPrize;
  attempts = allowAttempts;
  totalPrize = 0;

  while (attempts > 0) {
    askForChoice = prompt(`
      Choose a roulette pocket number from 0 to ${randomStage}
      Attempts left: ${attempts}
      Total prize: ${totalPrize}$
      Possible prize: ${prize}$
      Enter number`);

    if (
      +askForChoice !== random ||
      askForChoice === null ||
      askForChoice.length === 0
    ) {
      attempts--;
      prize /= changePrize;
    } else {
      totalPrize += prize;
      playGame = confirm(
        `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
      );
      if (playGame) {
        attempts = allowAttempts;
        randomStage = nextLevelStage;
        prize = maxNextPrize;
        random = Math.floor(Math.random() * (randomStage + 1));
      } else {
        playGame = confirm(`Thank you for your participation. Your prize is: ${totalPrize}
              Do you want to try your chance once more?`);
        if (playGame) {
          attempts = allowAttempts;
          prize = maxStartPrize;
          totalPrize = 0;
          randomStage = startLevelStage;
          random = Math.floor(Math.random() * (randomStage + 1));
        } else {
          break;
        }
      }
    }
    if (attempts === 0) {
      playGame = confirm(`Thank you for your participation. Your prize is: ${totalPrize}
        Do you want to try your chance once more?`);
      if (playGame) {
        prize = maxStartPrize;
        totalPrize = 0;
        attempts = allowAttempts;
        randomStage = startLevelStage;
        random = Math.floor(Math.random() * (randomStage + 1));
      } else {
        break;
      }
    }
  }
}
