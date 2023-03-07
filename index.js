//DOM elements

const domElements = (() => {})();

//game board
const gameBoard = (() => {
  let board = Array(3)
    .fill()
    .map(() => Array(3).fill());

  const getBoard = () => board;

  const resetBoard = () => {
    board = Array(3)
      .fill()
      .map(() => Array(3).fill());

    return board;
  };

  return { board, getBoard, resetBoard };
})();

//player object

const player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  return { getName, getMark };
};

//game logic

const game = (() => {
  const marks = ["X", "O"];
  let whoseTurn;
  let turnCount = 0;
  let gameOver = false;

  const getWhoseTurn = () => whoseTurn;

  let player1, player2;

  const createPlayers = (player1Name, player2Name) => {
    player1 = player(player1Name != "" ? player1Name : "Player 1", "X");

    player2 = player(player2Name != "" ? player2Name : "Player 2", "O");

    return [player1, player2];
  };

  const turn = (whoseTurn = null) => {
    if (whoseTurn == null) {
      return marks[Math.floor(Math.random() * marks.length)];
    }

    return marks.filter((mark) => mark !== whoseTurn)[0];
  };

  const move = (row, col) => {
    if (gameBoard.getBoard()[row][col] == undefined && gameOver == false) {
      turnCount++;

      gameBoard.board[row][col] = game.whoseTurn;

      if (checkWin(row, col, game.whoseTurn)) return;

      game.whoseTurn = turn(game.whoseTurn);
      displayController.displayMessage(
        `${[player1, player2]
          .filter((player) => player.getMark() === game.whoseTurn)[0]
          .getName()}'s turn`
      );
    }
  };

  const checkWin = (row, col, mark) => {
    //col win

    for (let i = 0; i < 3; i++) {
      if (gameBoard.getBoard()[i][col] != mark) {
        break;
      }
      if (i === 2) {
        return reportWin(mark);
      }
    }

    //row win

    for (let j = 0; j < 3; j++) {
      if (gameBoard.getBoard()[row][j] != mark) {
        break;
      }
      if (j === 2) {
        return reportWin(mark);
      }
    }

    //diag win

    if (row === col) {
      for (let i = 0; i < 3; i++) {
        if (gameBoard.getBoard()[i][i] != mark) {
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
        if (gameBoard.getBoard()[i][2 - i] != mark) {
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
      displayController.displayMessage("It's a draw!");

      return true;
    }
  };

  const reportWin = (mark) => {
    gameOver = true;
    displayController.displayMessage(
      `${[player1, player2]
        .filter((player) => player.getMark() === mark)[0]
        .getName()} wins!`
    );

    return true;
  };

  const playAgain = () => {
    gameBoard.board = gameBoard.resetBoard();
    displayController.emptyBoard();
    turnCount = 0;
    gameOver = false;

    game.whoseTurn = game.turn();
    displayController.displayMessage(
      `${[player1, player2]
        .filter((player) => player.getMark() === game.whoseTurn)[0]
        .getName()}'s turn`
    );
  };

  return { createPlayers, whoseTurn, turn, move, playAgain };
})();

//UI controller

const displayController = (() => {
  const cells = document.querySelectorAll(".board-cell");
  const playAgainButton = document.querySelector("#play-again");
  const newGameButton = document.querySelector("#new-game");
  const form = document.querySelector("form");
  const boardContainer = document.querySelector("#gameboard");
  const buttonContainer = document.querySelector("#button-container");
  const messageBox = document.querySelector("#game-message");

  form.classList.add("active");

  cells.forEach((cell) => {
    cell.onclick = () => {
      const row = cell.dataset.row;
      const col = cell.dataset.column;

      game.move(row, col);
      cell.textContent = gameBoard.getBoard()[row][col];
    };
  });

  const startGame = (e) => {
    e.preventDefault();

    const player1Name = document.getElementById("player1-name").value;
    const player2Name = document.getElementById("player2-name").value;

    //NOTE: Players are able create names with just spaces
    const players = game.createPlayers(player1Name, player2Name);

    boardContainer.classList.add("active");
    buttonContainer.classList.add("active");
    form.classList.remove("active");

    game.whoseTurn = game.turn();
    displayMessage(
      `${players
        .filter((player) => player.getMark() === game.whoseTurn)[0]
        .getName()}'s turn`
    );
  };

  const displayMessage = (message) => {
    messageBox.textContent = message;
  };

  const emptyBoard = () => {
    cells.forEach((cell) => {
      cell.textContent = "";
    });
  };

  playAgainButton.onclick = game.playAgain;

  newGameButton.onclick = () => {
    window.location.reload();
  };

  form.onsubmit = startGame;

  return { displayMessage, emptyBoard };
})();
