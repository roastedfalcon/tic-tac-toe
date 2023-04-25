export default class Player {
  #name;
  #mark;
  constructor(name, mark) {
    this.#name = name;
    this.#mark = mark;
    this.myTurn = false;
  }

  get name() {
    return this.#name;
  }

  get mark() {
    return this.#mark;
  }

  toggleMyTurn() {
    this.myTurn = !this.myTurn;
  }
}
