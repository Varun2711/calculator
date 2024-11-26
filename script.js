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
    this.#render();
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
    this.#render();
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
    this.#render();
  }

  divide() {
    if (this.prev === null) {
      this.prev = this.curr;
      this.curr = 0;
    } else if (this.curr === 0) {
      alert("divide by 0 error");
    } else {
      this.prev = this.prev / this.curr;
      this.curr = 0;
    }
    this.currOp = "div";
    this.#render();
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
          alert("divide by 0 error");
        } else {
          res = this.prev / this.curr;
        }
        break;
      default:
        res = this.curr;
    }
    this.curr = res;
    this.prev = null;
    this.#render();
  }

  percentage() {
    this.curr = this.curr / 100;
    this.#render();
  }

  signChange() {
    this.curr = this.curr * -1;
    this.#render();
  }

  clear() {
    this.curr = 0;
    this.#render();
  }

  clearEverything() {
    this.curr = 0;
    this.prev = null;
    this.currOp = 0;
    this.#render();
  }

  setCurr(value) {
    this.curr = value;
  }

  appendCurr(value) {
    let currInput = document.querySelector("#curr");
    if (currInput.textContent === "0") {
      currInput.textContent = value;
    } else if (calculator.prev === null) {
      console.log("i was here");
      this.prev = this.curr;
      this.curr = 0;
      this.#render();
      this.appendCurr(value);
    } else {
      currInput.textContent = currInput.textContent + value;
    }
    this.setCurr(parseFloat(currInput.textContent));
  }

  #render() {
    let currInput = document.querySelector("#curr");
    let prevComp = document.querySelector("#prev");
    currInput.textContent = this.curr;
    prevComp.textContent = this.prev;
  }
}

//initialize calculator
const calculator = new Calculator();

// keep track of key presses as onkeypress event has been depracated.
let keysPressed = {};

// operator buttons
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const mulBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");

// number pad
const nums = document.querySelectorAll(".nums");

// misc buttons
const ceBtn = document.querySelector("#all-clear");
const cBtn = document.querySelector("#clear");
const signBtn = document.querySelector("#sign");
const pctBtn = document.querySelector("#pct");
const decimalBtn = document.querySelector("#decimal");
const evaluateBtn = document.querySelector("#evaluate");

nums.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    calculator.appendCurr(event.target.id);
  });
});

decimalBtn.addEventListener("click", (event) => {
  calculator.appendCurr(".");
});

ceBtn.addEventListener("click", (event) => {
  calculator.clearEverything();
});

cBtn.addEventListener("click", (event) => {
  calculator.clear();
});

signBtn.addEventListener("click", (event) => {
  calculator.signChange();
});

pctBtn.addEventListener("click", (event) => {
  calculator.percentage();
});

addBtn.addEventListener("click", (event) => {
  calculator.add();
});

subBtn.addEventListener("click", (event) => {
  calculator.subtract();
});

mulBtn.addEventListener("click", (event) => {
  calculator.multiply();
});

divBtn.addEventListener("click", (event) => {
  calculator.divide();
});

evaluateBtn.addEventListener("click", (event) => {
  calculator.evaluate();
});
