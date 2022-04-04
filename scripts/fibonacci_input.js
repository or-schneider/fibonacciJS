import * as fibonacciCalculation from "./fibonacci_calculation.js";
import * as fibonacciResultDisplay from "./fibonacci_result_display.js";
import * as fibonacciResultsDisplay from "./fibonacci_results_display.js";
const inputMax = 50;
const inputMin = 1;

const inputNode = document.getElementById("fibonacciInput");
const inputButton = document.getElementById("fibonacciInputButton");

const serverCalculationCheckBox = document.getElementById(
  "fibonacciServerCalculationCheckBox"
);

function submitInput(e) {
  e.preventDefault();

  const userInput = inputNode.value;
  if (userInput === "") return;

  clearInputError();

  if (serverCalculationCheckBox.checked) {
    fibonacciResultDisplay.showSpinner();
    fibonacciCalculation.calculateServerSideAsync(
      userInput,
      calculateFibonacciComplete
    );
  } else {
    let success = validateInput(userInput);
    if (!success) return;
    let result = fibonacciCalculation.calculateRecursive(userInput);
    calculateFibonacciComplete(result);
  }
}
function validateInput(userInput) {
  if (userInput < inputMin) {
    showInputBelowMinRangeError(inputMin);
    return false;
  }
  if (userInput > inputMax) {
    showInputAboveMaxRangeError(inputMax);
    return false;
  }
  return true;
}
function calculateFibonacciComplete(result, error) {
  fibonacciResultDisplay.updateDisplay(result, error);
  if (!error) fibonacciResultsDisplay.refreshDisplay();
}

const inputErrorNode = document.getElementById("fibonacciInputError");
function clearInputError() {
  inputErrorNode.textContent = "&#8203;";
  inputErrorNode.classList.add("invisible");
  inputNode.classList.remove("border-danger");
  inputNode.classList.remove("text-danger");
}
function showInputAboveMaxRangeError(maxNumber) {
  showFibonacciInputError();

  let errorMessage = `Can't be larger than ${maxNumber}`;
  inputErrorNode.textContent = errorMessage;
}
function showInputBelowMinRangeError(minNumber) {
  showFibonacciInputError();

  let errorMessage = `Can't be smaller than ${minNumber}`;
  inputErrorNode.textContent = errorMessage;
}
function showFibonacciInputError() {
  inputErrorNode.classList.remove("invisible");
  inputNode.classList.add("border-danger");
  inputNode.classList.add("text-danger");
}

function init() {
  inputButton.addEventListener("click", submitInput);
}
init();
