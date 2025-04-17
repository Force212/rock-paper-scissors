// Step 2: Get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Get the human's choice
function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}

// Step 4: Declare the scores
let humanScore = 0;
let computerScore = 0;

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

// Step 6: Play the entire game
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(" You win the game! ");
    } else if (humanScore < computerScore) {
        console.log(" The computer wins the game! ");
    } else {
        console.log(" It's a tie! ");
    }
}

// Start the game
playGame();