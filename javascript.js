document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;

    const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll('.choice-button');
    const resultMessage = document.getElementById('result-message');
    const humanScoreDisplay = document.getElementById('human-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return "human";
        } else {
            return "computer";
        }
    }

    function updateScores(winner) {
        if (winner === "human") {
            humanScore++;
            resultMessage.textContent = "You win this round!";
        } else if (winner === "computer") {
            computerScore++;
            resultMessage.textContent = "Computer wins this round!";
        } else {
            resultMessage.textContent = "It's a tie!";
        }
        humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const winner = playRound(humanChoice, computerChoice);
            updateScores(winner);
        });
    });
});
