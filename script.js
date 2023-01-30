const getComputerChoice = () => {
	const game = ['rock', 'paper', 'scissors'];
	return game[Math.floor(Math.random() * 3)];
};

const playButtonsDiv = document.querySelectorAll('[play-buttons]');

// const getPlayerChoice = () => {
// 	playButtonsDiv.forEach((i) => {
// 		i.addEventListener('click', () => {
// 			getResult(i.value, computerChoice);
// 		});
// 	});
// };
const getResult = (playerChoice, computerChoice) => {
	let score = 0;
	if (playerChoice == 'rock') {
		if ((computerChoice = 'paper')) {
			score = -1;
		} else if (computerChoice == 'scissors') {
			score = 1;
		} else {
			score = 0;
		}
	} else if (playerChoice == 'paper') {
		if (computerChoice == 'rock') {
			score = 1;
		} else if (computerChoice == 'scissors') {
			score = -1;
		} else {
			score = 0;
		}
	} else if (playerChoice == 'scissors') {
		if (computerChoice == 'rock') {
			score = -1;
		} else if (computerChoice == 'paper') {
			score = 1;
		} else {
			score = 0;
		}
	}
	return score;
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
	hands.innerText = `👤${playerChoice} Vs 🤖${computerChoice}`;
};

const onClickRPS = (playerChoice) => {
	const computerChoice = getComputerChoice();
	const score = getResult(playerChoice.value, computerChoice);
	showResult(score, playerChoice.value, computerChoice);
};

const playGame = () => {
	let rpsbutton = document.querySelectorAll('[play-button]');
	rpsbutton.forEach((m) => {
		m.onclick = () => {
			onClickRPS(m);
		};
	});
	let endGameButton = document.getElementById('endGameButton');
	endGameButton.onclick = () => endGame;
};
const endGame = () => {
	let playerScore = document.getElementById('player-score');
	let hands = document.getElementById('hands');
	let result = document.getElementById('result');
	playerScore.innerText = '';
	hands.innerText = '';
	result.innerText = '';
};
playGame();
