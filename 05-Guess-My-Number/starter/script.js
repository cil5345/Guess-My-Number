// 'use strict';
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 10;
// document.querySelector('.highscore').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    console.log((document.querySelector('.message').textContent = '❌ No Number'));
  }
});
