// 'use strict';
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 10;
// document.querySelector('.highscore').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check button function
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    console.log(displayMessage('❌ No Number'));
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.again').style.visibility = 'visible';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    } else {
      return 'you lose';
    }
    //refactor code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.again').style.visibility = 'visible';
    }
  }
});

//again button restart
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing... ');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.again').style.visibility = 'hidden';
});
