"use strict";

//Megjelenítendő tizedesjegyek
const decimal = 5;

let result = 0;
let inputToDisplayArray = [];
let currentNumber = 0;

//Hibaüzenetekhez
let isFirstNumber = false;
let previousIsOperator = false;
let isFracture = false;
let isEqualedYet = false;

const init = () => {
  result = 0;
  currentNumber = 0;
  previousIsOperator = false;
  inputToDisplayArray = [];
  isFirstNumber = false;
  isEqualedYet = false;
  isFracture = false;
  displayInput();
};

const displayError = (error = "string") => {
  const to = setTimeout;
  clearTimeout(to);
  display.style.fontSize = "2.5em";
  display.innerHTML = error;
  to(displayInput, 1500);
};

const operatorToArray = (operator = "string") => {
  if (isEqualedYet === false) {
    if (inputToDisplayArray.length < 9) {
      previousIsOperator = true;
      isFracture = false;
      inputToDisplayArray.push(operator);
      displayInput();
    } else {
      displayError("Last char cannot be operator");
    }
  }
};

function numberClicked() {
  if (isEqualedYet === true) {
    inputToDisplayArray = [];
    isEqualedYet = false;
  }
  if (inputToDisplayArray.length < 10) {
    inputToDisplayArray.push(this.id);
    previousIsOperator = false;
    isFirstNumber = true;
    currentNumber = parseInt(currentNumber * 10) + parseInt(this.id);
    result = currentNumber;
    displayInput();
  } else {
    displayError("Expression: max 10 chars");
  }
}

const displayInput = () => {
  display.style.fontSize = "3em";
  if (inputToDisplayArray.length === 0) {
    display.innerHTML = "0";
  } else {
    display.innerHTML = inputToDisplayArray.join("");
  }
};

const evaluate = (result) => {
  let numbers = [];
  let operators = [];
  let index = 0;

  numbers[index] = "";
  operators[index] = "";

  for (let i = 0; i < result.length; i++) {
    if (isNaN(parseInt(result[i])) && result[i] !== ".") {
      operators[index] = result[i];
      index++;
      numbers[index] = "";
    } else {
      numbers[index] += result[i];
    }
  }

  result = parseFloat(numbers[0]);
  for (let op = 0; op < operators.length; op++) {
    let num = parseFloat(numbers[op + 1]);
    switch (operators[op]) {
      case "+":
        result = result + num;
        Number.isInteger(result) ? result : (result = result.toFixed(decimal));
        break;
      case "-":
        result = result - num;
        Number.isInteger(result) ? result : (result = result.toFixed(decimal));
        break;
      case "x":
        result = result * num;
        Number.isInteger(result) ? result : (result = result.toFixed(decimal));
        break;
      case "÷":
        result = result / num;
        Number.isInteger(result) ? result : (result = result.toFixed(decimal));
        break;
    }
  }

  return result;
};

const displayResult = () => {
  display.style.fontSize = "3em";
  if (previousIsOperator === true) {
    displayError("Exp. cannot end with operator");
  } else {
    if (inputToDisplayArray.length === 0) {
      result = 0;
      display.innerHTML = 0;
    } else {
      result = inputToDisplayArray;
      display.innerHTML = evaluate(inputToDisplayArray);
    }
    isEqualedYet = true;
    isFracture = false;
  }
};

const add = () => {
  if (isFirstNumber === false) {
    displayError("First char must be number");
  } else if (previousIsOperator === false) {
    operatorToArray("+");
  } else {
    displayError("Error: Double operator");
  }
};

const sub = () => {
  if (isFirstNumber === false) {
    displayError("First char must be number");
  } else if (previousIsOperator === false) {
    operatorToArray("-");
  } else {
    displayError("Error: Double operator");
  }
};

const multi = () => {
  if (isFirstNumber === false) {
    displayError("First char must be number");
  } else if (previousIsOperator === false) {
    operatorToArray("x");
  } else {
    displayError("Error: Double operator");
  }
};

const div = () => {
  if (isFirstNumber === false) {
    displayError("First char must be number");
  } else if (previousIsOperator === false) {
    operatorToArray("÷");
  } else {
    displayError("Error: Double operator");
  }
};

const dot = () => {
  if (isFirstNumber === false) {
    displayError("First char must be number");
  } else if (previousIsOperator === false) {
    if (isEqualedYet === false) {
      if (inputToDisplayArray.length < 9) {
        if (isFracture === false) {
          isFracture = true;
          inputToDisplayArray.push(".");
          displayInput();
        } else {
          displayError("Already a fraction");
        }
      } else {
        displayError("Last char cannot be operator");
      }
    }
  } else {
    displayError("Error: Double operator");
  }
};

const display = document.querySelector(".p");

const buttonAdd = document.querySelector("#button__add");
buttonAdd.addEventListener("click", add);
const buttonSub = document.querySelector("#button__sub");
buttonSub.addEventListener("click", sub);
const buttonMulti = document.querySelector("#button__multi");
buttonMulti.addEventListener("click", multi);
const buttonDiv = document.querySelector("#button__div");
buttonDiv.addEventListener("click", div);

const buttonC = document.querySelector("#button__C");
buttonC.addEventListener("click", init);

const buttonDot = document.querySelector("#button__dot");
buttonDot.addEventListener("click", dot);

const buttonEquals = document.querySelector("#equality__button");
buttonEquals.addEventListener("click", displayResult);

const button1 = document.querySelector(".button__1");
button1.addEventListener("click", numberClicked);
const button2 = document.querySelector(".button__2");
button2.addEventListener("click", numberClicked);
const button3 = document.querySelector(".button__3");
button3.addEventListener("click", numberClicked);
const button4 = document.querySelector(".button__4");
button4.addEventListener("click", numberClicked);
const button5 = document.querySelector(".button__5");
button5.addEventListener("click", numberClicked);
const button6 = document.querySelector(".button__6");
button6.addEventListener("click", numberClicked);
const button7 = document.querySelector(".button__7");
button7.addEventListener("click", numberClicked);
const button8 = document.querySelector(".button__8");
button8.addEventListener("click", numberClicked);
const button9 = document.querySelector(".button__9");
button9.addEventListener("click", numberClicked);
const button0 = document.querySelector(".button__0");
button0.addEventListener("click", numberClicked);
