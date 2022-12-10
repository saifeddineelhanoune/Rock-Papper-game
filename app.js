const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const resultStyle = document.getElementById('result').style
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
	if(resultDisplay.textContent === 'draw!')
		document.getElementById('result').style.color = "blue";
	if (resultDisplay.textContent === 'win!')
		document.getElementById('result').style.color = "green";
	if (resultDisplay.textContent === 'loss!')
		document.getElementById('result').style.color = "red";
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice)
    result = 'draw!'
  if (computerChoice === 'rock' && userChoice === "paper")
    result = 'win!'
  if (computerChoice === 'rock' && userChoice === "scissors")
    result = 'loss!'
  if (computerChoice === 'paper' && userChoice === "scissors")
    result = 'win!'
  if (computerChoice === 'paper' && userChoice === "rock")
    result = 'loss!'
  if (computerChoice === 'scissors' && userChoice === "rock")
    result = 'win!'
  if (computerChoice === 'scissors' && userChoice === "paper")
    result = 'loss!'
  resultDisplay.innerHTML = result
}
