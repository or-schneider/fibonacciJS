import * as fibonacciCalculation from "./fibonacci_calculation.js";
import * as fibonacciResultDisplay from "./fibonacci_result_display.js";
import * as fibonacciResultsDisplay from "./fibonacci_results_display.js";
const inputMax = 50;
const inputMin = 1;

let inputNode = document.getElementById("fibonacciInput");
let inputButton = document.getElementById("fibonacciInputButton");

let serverCalculationCheckBox = document.getElementById("fibonacciServerCalculationCheckBox");


inputButton.addEventListener('click',submitInput)
function submitInput(e){

    e.preventDefault();

    let userInput = inputNode.value;
    if(userInput == "")
        return;
    
    clearInputError();

    if(serverCalculationCheckBox.checked){

        fibonacciResultDisplay.showSpinner();
        fibonacciCalculation.calculateServerSideAsync(userInput, calculateFibonacciAtServerComplete);
    }
    else{
        let success = validateInput(userInput);
        if(!success)
            return;
        let result = fibonacciCalculation.calculateRecursive(userInput);
        fibonacciResultDisplay.updateDisplay(result);
        
    }
}
function validateInput(userInput){
    if (userInput < inputMin) {
        showInputBelowMinRangeError(inputMin);
        return false;
    }
    if(userInput>inputMax){
        showInputAboveMaxRangeError(inputMax);
        return false;
    }
        return true;

}
function calculateFibonacciAtServerComplete(result, error){
    fibonacciResultDisplay.updateDisplay(result, error);
        if(!error)
            fibonacciResultsDisplay.refreshDisplay();
}
let inputErrorNode = document.getElementById("fibonacciInputError");
function clearInputError(){
    inputErrorNode.textContent = "&#8203;";
    inputErrorNode.classList.add("invisible");
    inputNode.classList.remove("border-danger");
    inputNode.classList.remove("text-danger");
}
function showInputAboveMaxRangeError(maxNumber){
    
    showFibonacciInputError();

    let errorMessage = `Can't be larger than ${maxNumber}`;
    inputErrorNode.textContent = errorMessage;
}
function showInputBelowMinRangeError(minNumber){
    
    showFibonacciInputError();

    let errorMessage = `Can't be smaller than ${minNumber}`;
    inputErrorNode.textContent = errorMessage;
}
function showFibonacciInputError(){
    inputErrorNode.classList.remove("invisible");
    inputNode.classList.add("border-danger");
    inputNode.classList.add("text-danger");
}