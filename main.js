/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBoard\": () => (/* binding */ getBoard),\n/* harmony export */   \"getBoardValue\": () => (/* binding */ getBoardValue),\n/* harmony export */   \"getEmptySpaceIndecies\": () => (/* binding */ getEmptySpaceIndecies),\n/* harmony export */   \"resetBoard\": () => (/* binding */ resetBoard),\n/* harmony export */   \"setBoardValue\": () => (/* binding */ setBoardValue)\n/* harmony export */ });\nlet board = Array(3)\n  .fill()\n  .map(() => Array(3).fill());\n\nlet emptySpaceIdecies = [\n  [0, 0],\n  [0, 1],\n  [0, 2],\n  [1, 0],\n  [1, 1],\n  [1, 2],\n  [2, 0],\n  [2, 1],\n  [2, 2],\n];\n\nconst popEmptySpaceIndex = (location) => {\n  emptySpaceIdecies = emptySpaceIdecies.filter((emptySpace) =>\n    emptySpace.some((value, index) => value !== location[index])\n  );\n};\n\nconst getBoard = () => board;\n\nconst getBoardValue = (row, col) => board[row][col];\n\nconst setBoardValue = (row, col, value) => {\n  board[row][col] = value;\n\n  popEmptySpaceIndex([row, col]);\n};\n\nconst getEmptySpaceIndecies = () => emptySpaceIdecies;\n\nconst resetBoard = () => {\n  board = Array(3)\n    .fill()\n    .map(() => Array(3).fill());\n\n  emptySpaceIdecies = [\n    [0, 0],\n    [0, 1],\n    [0, 2],\n    [1, 0],\n    [1, 1],\n    [1, 2],\n    [2, 0],\n    [2, 1],\n    [2, 2],\n  ];\n};\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayers\": () => (/* binding */ createPlayers),\n/* harmony export */   \"move\": () => (/* binding */ move),\n/* harmony export */   \"playAgain\": () => (/* binding */ playAgain),\n/* harmony export */   \"setVScpu\": () => (/* binding */ setVScpu),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\n\n\nconst marks = [\"X\", \"O\"];\nlet whoseTurn;\nlet turnCount;\nlet gameOver;\n\nlet player1, player2;\nlet vsCPU = false;\n\nconst setVScpu = () => {\n  vsCPU = true;\n};\n\nconst createPlayers = (player1Name, player2Name) => {\n  if (vsCPU === true) {\n    player1 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Player\", \"X\");\n    player2 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"CPU\", \"O\", true);\n  } else {\n    player1 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player1Name != \"\" ? player1Name : \"Player 1\", \"X\");\n\n    player2 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player2Name != \"\" ? player2Name : \"Player 2\", \"O\");\n  }\n};\n\nconst startGame = () => {\n  turnCount = 0;\n  gameOver = false;\n  turn(true);\n};\n\n//export const getWhoseTurn = () => whoseTurn;\n\nconst turn = (newGame = false) => {\n  if (newGame === true) {\n    whoseTurn = marks[Math.floor(Math.random() * marks.length)];\n  } else {\n    whoseTurn = marks.filter((mark) => mark !== whoseTurn)[0]; //is there a better way to switch turns\n  }\n\n  const currentPlayersTurn = [player1, player2].filter(\n    (player) => player.mark === whoseTurn\n  )[0]; //is there a better way\n\n  (0,_page__WEBPACK_IMPORTED_MODULE_2__.displayMessage)(`${currentPlayersTurn.name}'s turn`);\n\n  if (currentPlayersTurn.isCPU === true) {\n    CPUmove();\n  }\n};\n\nconst move = (row, col) => {\n  if ((0,_board__WEBPACK_IMPORTED_MODULE_1__.getBoardValue)(row, col) == undefined && gameOver == false) {\n    turnCount++;\n\n    (0,_board__WEBPACK_IMPORTED_MODULE_1__.setBoardValue)(row, col, whoseTurn);\n    (0,_page__WEBPACK_IMPORTED_MODULE_2__.updateBoardCell)(row, col, whoseTurn);\n\n    if (checkWin(row, col, whoseTurn)) return;\n\n    turn();\n  }\n};\n\nconst checkWin = (row, col, mark) => {\n  let board = (0,_board__WEBPACK_IMPORTED_MODULE_1__.getBoard)();\n\n  //col win\n  for (let i = 0; i < 3; i++) {\n    if (board[i][col] != mark) {\n      break;\n    }\n    if (i === 2) {\n      return reportWin(mark);\n    }\n  }\n\n  //row win\n\n  for (let j = 0; j < 3; j++) {\n    if (board[row][j] != mark) {\n      break;\n    }\n    if (j === 2) {\n      return reportWin(mark);\n    }\n  }\n\n  //diag win\n\n  if (row === col) {\n    for (let i = 0; i < 3; i++) {\n      if (board[i][i] != mark) {\n        break;\n      }\n      if (i === 2) {\n        return reportWin(mark);\n      }\n    }\n  }\n\n  //anti-diag win\n\n  if (row + col === 2) {\n    for (let i = 0; i < 3; i++) {\n      if (board[i][2 - i] != mark) {\n        break;\n      }\n      if (i === 2) {\n        return reportWin(mark);\n      }\n    }\n  }\n\n  //draw\n  if (turnCount == 9) {\n    gameOver = true;\n    (0,_page__WEBPACK_IMPORTED_MODULE_2__.displayMessage)(\"It's a draw!\");\n\n    return true;\n  }\n};\n\nconst reportWin = (winningMark) => {\n  gameOver = true;\n  (0,_page__WEBPACK_IMPORTED_MODULE_2__.displayMessage)(\n    `${\n      [player1, player2].filter((player) => player.mark === winningMark)[0].name\n    } wins!`\n  );\n\n  return true;\n};\n\nfunction playAgain() {\n  (0,_board__WEBPACK_IMPORTED_MODULE_1__.resetBoard)();\n  startGame();\n}\n\nconst CPUmove = () => {\n  const availableMoves = (0,_board__WEBPACK_IMPORTED_MODULE_1__.getEmptySpaceIndecies)();\n\n  const chosenMove =\n    availableMoves[Math.floor(Math.random() * availableMoves.length)];\n\n  move(chosenMove[0], chosenMove[1]);\n};\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/game.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMessage\": () => (/* binding */ displayMessage),\n/* harmony export */   \"updateBoardCell\": () => (/* binding */ updateBoardCell)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst cells = document.querySelectorAll(\".board-cell\");\nconst playAgainButton = document.querySelector(\"#play-again\");\nconst newGameButton = document.querySelector(\"#new-game\");\nconst boardContainer = document.querySelector(\"#gameboard\");\nconst buttonContainer = document.querySelector(\"#button-container\");\nconst messageBox = document.querySelector(\"#game-message\");\n\nconst form = document.querySelector(\"form\");\nconst formSubmitButton = form.querySelector('button[type=\"submit\"');\nconst playerNamesInputContainer = form.querySelector(\"#player-names\");\nconst vsPlayerRadioButton = form.querySelector(\"#mode-player\");\nconst vsCPUradioButton = form.querySelector(\"#mode-cpu\");\n\nformSubmitButton.classList.add(\"inactive\");\nplayerNamesInputContainer.classList.add(\"inactive\");\nboardContainer.classList.add(\"inactive\");\nbuttonContainer.classList.add(\"inactive\");\n\nvsPlayerRadioButton.addEventListener(\"click\", () => {\n  playerNamesInputContainer.classList.remove(\"inactive\");\n  formSubmitButton.classList.remove(\"inactive\");\n});\n\nvsCPUradioButton.addEventListener(\"click\", () => {\n  playerNamesInputContainer.classList.add(\"inactive\");\n  formSubmitButton.classList.remove(\"inactive\");\n});\n\nconst updateBoardCell = (row, col, mark) => {\n  document.querySelector(\n    `[data-row=\"${row}\"][data-column=\"${col}\"]`\n  ).textContent = mark;\n};\n\ncells.forEach((cell) => {\n  cell.onclick = () => {\n    const row = Number(cell.dataset.row);\n    const col = Number(cell.dataset.column);\n\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__.move)(row, col);\n  };\n});\n\nconst loadGamePage = (e) => {\n  e.preventDefault();\n\n  const player1Name = document.getElementById(\"player1-name\").value;\n  const player2Name = document.getElementById(\"player2-name\").value;\n\n  if (vsCPUradioButton.checked) (0,_game__WEBPACK_IMPORTED_MODULE_1__.setVScpu)();\n\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.createPlayers)(player1Name, player2Name);\n\n  //NOTE: Players are able create names with just spaces\n\n  boardContainer.classList.remove(\"inactive\");\n  buttonContainer.classList.remove(\"inactive\");\n  form.classList.add(\"inactive\");\n\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n};\n\nconst displayMessage = (message) => {\n  messageBox.textContent = message;\n};\n\nconst emptyBoard = () => {\n  cells.forEach((cell) => {\n    cell.textContent = \"\";\n  });\n};\n\nplayAgainButton.onclick = () => {\n  emptyBoard();\n  (0,_game__WEBPACK_IMPORTED_MODULE_1__.playAgain)();\n};\n\nform.onsubmit = loadGamePage;\n\nnewGameButton.onclick = () => {\n  window.location.reload();\n};\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/page.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  #name;\n  #mark;\n  #isCPU;\n  constructor(name, mark, isCPU = false) {\n    this.#name = name;\n    this.#mark = mark;\n    this.#isCPU = isCPU;\n    //this.myTurn = false;\n  }\n\n  get name() {\n    return this.#name;\n  }\n\n  get mark() {\n    return this.#mark;\n  }\n\n  get isCPU() {\n    return this.#isCPU;\n  }\n\n  /*\n  toggleMyTurn() {\n    this.myTurn = !this.myTurn;\n  }\n  */\n}\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;