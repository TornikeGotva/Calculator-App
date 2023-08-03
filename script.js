const btnRemove = document.querySelector(".btn-remove");
const btnDivide = document.querySelector(".btn-divide");
const btnMultiply = document.querySelector(".btn-multiply");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnEqual = document.querySelector(".btn-equal");
const btnOperators = document.querySelectorAll(".operator");
const btnNumbers = document.querySelectorAll(".number");
let inputBar = document.querySelector(".input");
let inputForm = document.getElementById("form");

function displayNumbersAndOperations(e) {
  const id = e.target.dataset.id;
  inputBar.textContent += id;
}

function calcNum(e) {
  const id = e.target.dataset.id;
  inputBar.textContent = eval(inputBar.textContent);
  console.log(id);
}

function calcRemove() {
  inputBar.textContent = "";
}

btnEqual.addEventListener("click", calcNum);

btnRemove.addEventListener("click", calcRemove);

btnNumbers.forEach((el) => {
  el.addEventListener("click", displayNumbersAndOperations);
});

btnOperators.forEach((el) => {
  el.addEventListener("click", displayNumbersAndOperations);
});
