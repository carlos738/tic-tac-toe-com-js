let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = false;

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("message").textContent = "";
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
}

function endGame() {
  gameActive = false;
  document.getElementById("message").textContent = "Jogo finalizado.";
}

function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add("taken");

  if (checkWin()) {
    document.getElementById("message").textContent = currentPlayer === "X" ? "You Win!" : "Você perdeu!";
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    document.getElementById("message").textContent = "Empate!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});
