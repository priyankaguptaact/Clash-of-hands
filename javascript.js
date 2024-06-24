function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    switch (randomNumber) {
        case 0:
            return "stone";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getHumanChoice() {
    let sign = prompt("Enter your choice (stone, paper, or scissor):\n(Each round consist of 5 turns.)").toLowerCase();
    while (sign !== "stone" && sign !== "paper" && sign !== "scissor") {
        sign = prompt("Invalid choice! Please enter stone, paper, or scissor:").toLowerCase();
    }
    return sign;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "stone" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "stone") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const roundResult = playRound(humanChoice, computerChoice);
        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        } else {
            continue;
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie game overall!");
    }
}

playGame();
