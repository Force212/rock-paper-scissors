let humanScore = 0;
let computerScore = 0;

// Функция для выбора компьютера
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Обновление интерфейса
function updateUI(resultMessage) {
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("scores").textContent = `Scores: Human: ${humanScore} | Computer: ${computerScore}`;
}

// Проверка победителя игры
function checkWinner() {
    if (humanScore === 5) {
        document.getElementById("status").textContent = "🎉 You win the game! 🎉";
        showRestartButton();
        return true;
    } else if (computerScore === 5) {
        document.getElementById("status").textContent = "🤖 The computer wins the game! 🤖";
        showRestartButton();
        return true;
    }
    return false;
}

// Показать кнопку "Play Again"
function showRestartButton() {
    document.getElementById("restart").style.display = "block";
    document.querySelectorAll(".buttons button").forEach(button => {
        button.disabled = true; // Отключаем кнопки выбора
    });
}

// Скрыть кнопку "Play Again"
function hideRestartButton() {
    document.getElementById("restart").style.display = "none";
    document.querySelectorAll(".buttons button").forEach(button => {
        button.disabled = false; // Включаем кнопки выбора
    });
}

// Логика одного раунда
function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return; // Игра завершена

    const computerChoice = getComputerChoice();
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    updateUI(resultMessage);

    // Проверяем, есть ли победитель
    if (checkWinner()) {
        return;
    }
}

// Перезапуск игры
document.getElementById("restart").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("status").textContent = "Choose your move:";
    document.getElementById("result").textContent = "";
    updateUI("Let's play again!");
    hideRestartButton();
});

// Обработка выбора человека
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));