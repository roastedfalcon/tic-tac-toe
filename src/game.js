import Player from "./player";
import { getBoard, getBoardValue, setBoardValue, resetBoard } from "./board";
import { displayMessage } from "./page";

const marks = ["X", "O"];
let whoseTurn;
let turnCount;
let gameOver;

let player1, player2;

export const createPlayers = (player1Name, player2Name) => {
  player1 = new Player(player1Name != "" ? player1Name : "Player 1", "X");

  player2 = new Player(player2Name != "" ? player2Name : "Player 2", "O");

  return [player1, player2];
};

export const startGame = () => {
  turnCount = 0;
  gameOver = false;
  turn(true);
};

export const getWhoseTurn = () => whoseTurn;

const turn = (newGame = false) => {
  if (newGame === true) {
    whoseTurn = marks[Math.floor(Math.random() * marks.length)];
  } else {
    whoseTurn = marks.filter((mark) => mark !== whoseTurn)[0]; //is there a better way to switch turns
  }
};

export const move = (row, col) => {
  if (getBoardValue(row, col) == undefined && gameOver == false) {
    turnCount++;

    setBoardValue(row, col, whoseTurn);

    if (checkWin(row, col, whoseTurn)) return;

    turn();
    displayMessage(
      `${
        [player1, player2].filter((player) => player.mark === whoseTurn)[0].name //is there a better way
      }'s turn`
    );
  }
};

const checkWin = (row, col, mark) => {
  //col win
  let board = getBoard();

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

  displayMessage(
    `${
      [player1, player2].filter((player) => player.mark === whoseTurn)[0].name
    }'s turn`
  );
}
