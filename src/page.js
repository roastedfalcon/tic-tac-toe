import { getBoardValue } from "./board";
import {
  move,
  createPlayers,
  playAgain,
  startGame,
  getWhoseTurn,
} from "./game";

const cells = document.querySelectorAll(".board-cell");
const playAgainButton = document.querySelector("#play-again");
const newGameButton = document.querySelector("#new-game");
const boardContainer = document.querySelector("#gameboard");
const buttonContainer = document.querySelector("#button-container");
const messageBox = document.querySelector("#game-message");
const form = document.querySelector("form");

form.classList.add("active");

cells.forEach((cell) => {
  cell.onclick = () => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.column);

    move(row, col);
    cell.textContent = getBoardValue(row, col);
  };
});

const loadGamePage = (e) => {
  e.preventDefault();

  const player1Name = document.getElementById("player1-name").value;
  const player2Name = document.getElementById("player2-name").value;

  //NOTE: Players are able create names with just spaces
  const players = createPlayers(player1Name, player2Name);

  boardContainer.classList.add("active");
  buttonContainer.classList.add("active");
  form.classList.remove("active");

  startGame();
  displayMessage(
    `${
      players.filter((player) => player.mark === getWhoseTurn())[0].name
    }'s turn`
  );
};

export const displayMessage = (message) => {
  messageBox.textContent = message;
};

const emptyBoard = () => {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
};

playAgainButton.onclick = () => {
  emptyBoard();
  playAgain();
};

form.onsubmit = loadGamePage;

newGameButton.onclick = () => {
  window.location.reload();
};
