const getComputerChoice = () => {
	const game = ['Rock', 'Paper', 'Scissors'];
	return game[Math.floor(Math.random() * 3)];
};

const playButtonsDiv = document.querySelectorAll('[play-buttons]');

const onClickRPS = () => {
	playButtonsDiv.forEach((i) => {
		i.addEventListener('click', () => {
			const computerChoice = getComputerChoice();
			getResult(i.value, computerChoice);
		});
	});
};
const showResult = (score, playerChoice, computerChoice) => {
	let result = document.getElementById('result');
	if (score == -1) {
		result.innerText = 'You Lose!';
	} else if (score == 1) {
		result.innerText = 'You Win!';
	} else {
		result.innerText = "It's a Draw";
	}
	let playerScore = document.getElementById('player-score');
	let hands = document.getElementById('hands');
	playerScore.innerText = `${Number(playerScore.innerText) + score}`;
	hands.innerText = `👤 ${playerChoice} Vs 🤖 ${computerChoice}`;
};

const getResult = (playerChoice, computerChoice) => {
	let score = 0;
	if (playerChoice == 'Rock') {
		if ((computerChoice = 'Paper')) {
			score = -1;
		} else if (computerChoice == 'Scissors') {
			score = 1;
		} else {
			score = 0;
		}
	} else if (playerChoice == 'Paper') {
		if (computerChoice == 'Rock') {
			score = 1;
		} else if (computerChoice == 'Scissors') {
			score = -1;
		} else {
			score = 0;
		}
	} else if (playerChoice == 'Scissors') {
		if (computerChoice == 'Rock') {
			score = -1;
		} else if (computerChoice == 'Paper') {
			score = 1;
		} else {
			score = 0;
		}
	}

	showResult(score, playerChoice, computerChoice);
};

let endGameButton = document.getElementById('endGameButton');
const endGame = () => {
	let playerScore = document.getElementById('player-score');
	let hands = document.getElementById('hands');
	let result = document.getElementById('result');
	playerScore.innerText = '';
	hands.innerText = '';
	result.innerText = '';
};
onClickRPS();
endGameButton.onclick = () => endGame();
