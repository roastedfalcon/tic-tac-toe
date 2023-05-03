export default class Player {
  #name;
  #mark;
  #isCPU;
  constructor(name, mark, isCPU = false) {
    this.#name = name;
    this.#mark = mark;
    this.#isCPU = isCPU;
    //this.myTurn = false;
  }

  get name() {
    return this.#name;
  }

  get mark() {
    return this.#mark;
  }

  get isCPU() {
    return this.#isCPU;
  }

  /*
  toggleMyTurn() {
    this.myTurn = !this.myTurn;
  }
  */
}
