"use strict";

let sum = 0;
let number1 = 0;
let number2 = 0;
let operand = "";

const init = () => {
  sum = 0;
  number1 = 0;
  number2 = 0;
  operand = "";
  displayResult();
};

function numberClicked() {
  if (number1 < 10000000000) {
    number1 = parseInt(number1 * 10) + parseInt(this.id);
    displayResult();
  } else {
    clearTimeout(to);
    display.innerHTML = "Number too high";
    setTimeout(displayResult(), 500);
  }
}

const displayResult = () => {
  display.innerHTML = number1;
};

const display = document.querySelector(".p");
const buttonAdd = document.querySelector("#button__add");
const buttonSub = document.querySelector("#button__sub");
const buttonMulti = document.querySelector("#button__multi");
const buttonDiv = document.querySelector("#button__div");
const buttonC = document.querySelector("#button__C");
buttonC.addEventListener("click", init);
const buttonDot = document.querySelector("#button__dot");
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

//Hosszabb mint int - hiba
//egyenlőség után ne lehessen számot írni
