const computerChoicePrint = document.getElementById('computer-choice');
const userChoicePrint = document.getElementById('user-choice');
const Result = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

allChoices.forEach(
	allChoices => addEventListener('click',
		(e) => {
			userChoice = e.target.id;
			userChoicePrint.innerHTML = userChoice;
			generateComputerChoice();
		}
	)
)

function generateComputerChoice()
{
	const randomNumber = Math.floor(Math.random() * allChoices.length + 1);
	if (randomNumber === 1)
		computerChoice = 'rock';
	else if (randomNumber === 2)
		computerChoice = 'papper';
	else if (randomNumber === 3)
		computerChoice = 'scissors';
	computerChoicePrint.innerHTML = computerChoice;
}
