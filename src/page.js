import { move, createPlayers, playAgain, startGame, setVScpu } from "./game";

//DOM elements
const cells = document.querySelectorAll(".board-cell");
const playAgainButton = document.querySelector("#play-again");
const newGameButton = document.querySelector("#new-game");
const boardContainer = document.querySelector("#gameboard");
const buttonContainer = document.querySelector("#button-container");
const messageBox = document.querySelector("#game-message");

const form = document.querySelector("form");
const formSubmitButton = form.querySelector('button[type="submit"');
const playerNamesInputContainer = form.querySelector("#player-names");
const vsPlayerRadioButton = form.querySelector("#mode-player");
const vsCPUradioButton = form.querySelector("#mode-cpu");

//public functions
export const updateBoardCell = (row, col, mark) => {
  document.querySelector(
    `[data-row="${row}"][data-column="${col}"]`
  ).textContent = mark;
};

export const displayMessage = (message) => {
  messageBox.textContent = message;
};

//private functions
const loadGamePage = (e) => {
  e.preventDefault();

  const player1Name = document.getElementById("player1-name").value;
  const player2Name = document.getElementById("player2-name").value;

  if (vsCPUradioButton.checked) setVScpu();

  createPlayers(player1Name, player2Name);

  //NOTE: Players are able create names with just spaces

  boardContainer.classList.remove("inactive");
  buttonContainer.classList.remove("inactive");
  form.classList.add("inactive");

  startGame();
};

const emptyBoard = () => {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
};

//page initialization
formSubmitButton.classList.add("inactive");
playerNamesInputContainer.classList.add("inactive");

boardContainer.classList.add("inactive");
buttonContainer.classList.add("inactive");

//event listeners
vsPlayerRadioButton.addEventListener("click", () => {
  playerNamesInputContainer.classList.remove("inactive");
  formSubmitButton.classList.remove("inactive");
});

vsCPUradioButton.addEventListener("click", () => {
  playerNamesInputContainer.classList.add("inactive");
  formSubmitButton.classList.remove("inactive");
});

form.onsubmit = loadGamePage;

cells.forEach((cell) => {
  cell.onclick = () => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.column);

    move(row, col);
  };
});

playAgainButton.onclick = () => {
  emptyBoard();
  playAgain();
};

newGameButton.onclick = () => {
  window.location.reload();
};
