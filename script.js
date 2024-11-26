// caclulator class
class Calculator {
  constructor() {
    this.curr = 0;
    this.prev = null;
    this.currOp = null;
  }

  add() {
    if (this.prev === null) {
      this.prev = this.curr;
      this.curr = 0;
    } else {
      this.prev = this.prev + this.curr;
      this.curr = 0;
    }
    this.currOp = "add";
  }

  subtract() {
    if (this.prev === null) {
      this.prev = this.curr;
      this.curr = 0;
    } else {
      this.prev = this.prev - this.curr;
      this.curr = 0;
    }
    this.currOp = "sub";
  }

  multiply() {
    if (this.prev === null) {
      this.prev = this.curr;
      this.curr = 0;
    } else {
      this.prev = this.prev * this.curr;
      this.curr = 0;
    }
    this.currOp = "mul";
  }

  divide() {
    if (this.prev === null) {
      this.prev = this.curr;
      this.curr = 0;
    } else if (this.curr === 0) {
      throw new Error("divide by 0 error");
    } else {
      this.prev = this.prev / this.curr;
      this.curr = 0;
    }
    this.currOp = "div";
  }

  evaluate() {
    let res = null;
    switch (this.currOp) {
      case "add":
        res = this.prev + this.curr;
        break;
      case "sub":
        res = this.prev - this.curr;
        break;
      case "mul":
        res = this.prev * this.curr;
        break;
      case "div":
        if (this.curr === 0) {
          throw new Error("divide by 0 error");
        } else {
          res = this.prev / this.curr;
        }
        break;
      default:
        res = this.curr;
    }
    this.curr = res;
    this.prev = null;
  }

  percentage() {
    this.curr = this.curr / 100;
  }

  signChange() {
    this.curr = this.curr * -1;
  }

  clear() {
    this.curr = 0;
  }

  clearEverything() {
    this.curr = 0;
    this.prev = null;
    this.currOp = 0;
  }

  setCurr(value) {
    this.curr = value;
  }
}

// keep track of key presses as onkeypress event has been depracated.
let keysPressed = {};

let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", (event) => {
  console.log(event.target.innerHTML);
});
