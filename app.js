const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let userChoiceNumber;
let computerChoiceNumber;
let result;
let cc = ['rock', 'paper', 'scissors'];

const winningResults = ['13', '21', '32'];

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener('click', (e) => {
    const fn = new Function(possibleChoice.getAttribute('(click)'));
    fn();
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  computerChoiceNumber = randomNumber;

  computerChoiceDisplay.innerHTML = cc[randomNumber - 1];
}

function getResult() {
  resultDisplay.innerHTML = '';
  let userFirstCombineAnswers = userChoiceNumber + '' + computerChoiceNumber;
  let computerFirstCombineAnswer = computerChoiceNumber + '' + userChoiceNumber;

  let isUserWinner = winningResults.find((x) => x === userFirstCombineAnswers);

  const isComputerWinner = winningResults.find(
    (x) => x === computerFirstCombineAnswer
  );

  resultDisplay.innerHTML = isUserWinner
    ? 'you win!'
    : isComputerWinner
    ? 'you loose!'
    : '';

  if (!isUserWinner && !isComputerWinner) {
    resultDisplay.innerHTML = 'its a draw!';
  }
}

function chosen(val) {
  userChoice = cc[val - 1];
  userChoiceNumber = val;
}
