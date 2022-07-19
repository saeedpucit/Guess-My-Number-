'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(displayScore) {
  document.querySelector('.score').textContent = displayScore;
}

function displayNumber(displayNumber) {
  document.querySelector('.number').textContent = displayNumber;
}

function bodyBackgroundColor(bodyColor) {
  document.querySelector('body').style.backgroundColor = bodyColor;
}

function numberWidth(numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess == secretNumber) {
    displayMessage('🏆 Correct Number!');
    displayNumber(secretNumber);

    bodyBackgroundColor('#60b347');

    numberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('👎 You lost the game!');
      displayScore(0);
    }
  }

  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  // ************************************************************
  // ****************************Coding Challenge no 1 **********
  // ************************************************************
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = randomNumber();
    score = 20;
    displayNumber('?');
    displayMessage('Start guessing...');

    displayScore(score);
    document.querySelector('.guess').value = '';
    bodyBackgroundColor('#222');
    numberWidth('15rem');
  });
});
