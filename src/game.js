import Player from "./player";
import {
  getBoard,
  getBoardValue,
  setBoardValue,
  resetBoard,
  getEmptySpaceIndecies,
} from "./board";
import { updateBoardCell, displayMessage } from "./page";

const marks = ["X", "O"];
let whoseTurn;
let turnCount;
let gameOver;

let player1, player2;
let vsCPU = false;

export const setVScpu = () => {
  vsCPU = true;
};

export const createPlayers = (player1Name, player2Name) => {
  if (vsCPU === true) {
    player1 = new Player("Player", "X");
    player2 = new Player("CPU", "O", true);
  } else {
    player1 = new Player(player1Name != "" ? player1Name : "Player 1", "X");

    player2 = new Player(player2Name != "" ? player2Name : "Player 2", "O");
  }
};

export const startGame = () => {
  turnCount = 0;
  gameOver = false;
  turn(true);
};

const turn = (newGame = false) => {
  if (newGame === true) {
    whoseTurn = marks[Math.floor(Math.random() * marks.length)];
  } else {
    whoseTurn = marks.filter((mark) => mark !== whoseTurn)[0]; //is there a better way to switch turns
  }

  const currentPlayersTurn = [player1, player2].filter(
    (player) => player.mark === whoseTurn
  )[0]; //is there a better way

  displayMessage(`${currentPlayersTurn.name}'s turn`);

  if (currentPlayersTurn.isCPU === true) {
    setTimeout(CPUmove, 500);
  }
};

export const move = (row, col) => {
  if (getBoardValue(row, col) == undefined && gameOver == false) {
    turnCount++;

    setBoardValue(row, col, whoseTurn);
    updateBoardCell(row, col, whoseTurn);

    if (checkWin(row, col, whoseTurn)) return;

    turn();
  }
};

const checkWin = (row, col, mark) => {
  let board = getBoard();

  //col win
  for (let i = 0; i < 3; i++) {
    if (board[i][col] != mark) {
      break;
    }
    if (i === 2) {
      return reportWin(mark);
    }
  }

  //row win

  for (let j = 0; j < 3; j++) {
    if (board[row][j] != mark) {
      break;
    }
    if (j === 2) {
      return reportWin(mark);
    }
  }

  //diag win

  if (row === col) {
    for (let i = 0; i < 3; i++) {
      if (board[i][i] != mark) {
        break;
      }
      if (i === 2) {
        return reportWin(mark);
      }
    }
  }

  //anti-diag win

  if (row + col === 2) {
    for (let i = 0; i < 3; i++) {
      if (board[i][2 - i] != mark) {
        break;
      }
      if (i === 2) {
        return reportWin(mark);
      }
    }
  }

  //draw
  if (turnCount == 9) {
    gameOver = true;
    displayMessage("It's a draw!");

    return true;
  }
};

const reportWin = (winningMark) => {
  gameOver = true;
  displayMessage(
    `${
      [player1, player2].filter((player) => player.mark === winningMark)[0].name
    } wins!`
  );

  return true;
};

export function playAgain() {
  resetBoard();
  startGame();
}

const CPUmove = () => {
  const availableMoves = getEmptySpaceIndecies();

  const chosenMove =
    availableMoves[Math.floor(Math.random() * availableMoves.length)];

  move(chosenMove[0], chosenMove[1]);
};
