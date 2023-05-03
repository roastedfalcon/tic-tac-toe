let board = Array(3)
  .fill()
  .map(() => Array(3).fill());

let emptySpaceIdecies = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

const popEmptySpaceIndex = (location) => {
  emptySpaceIdecies = emptySpaceIdecies.filter((emptySpace) =>
    emptySpace.some((value, index) => value !== location[index])
  );
};

export const getBoard = () => board;

export const getBoardValue = (row, col) => board[row][col];

export const setBoardValue = (row, col, value) => {
  board[row][col] = value;

  popEmptySpaceIndex([row, col]);
};

export const getEmptySpaceIndecies = () => emptySpaceIdecies;

export const resetBoard = () => {
  board = Array(3)
    .fill()
    .map(() => Array(3).fill());

  emptySpaceIdecies = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
};
