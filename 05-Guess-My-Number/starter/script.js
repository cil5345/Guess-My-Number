// 'use strict';
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 10;
// document.querySelector('.highscore').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;


console.log(secretNumber);


//Check button function
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '❌ No Number')
    );
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number';
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
