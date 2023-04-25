let board = Array(3)
  .fill()
  .map(() => Array(3).fill());

export const getBoard = () => board;

export const getBoardValue = (row, col) => board[row][col];

export const setBoardValue = (row, col, value) => {
  board[row][col] = value;
};

export const resetBoard = () => {
  board = Array(3)
    .fill()
    .map(() => Array(3).fill());
};
