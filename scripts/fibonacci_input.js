const fibonacciInputMax = 50;
const fibonacciInputMin = 1;

let fibonacciInputNode = document.getElementById("fibonacciInput");
let fibonacciInputButton = document.getElementById("fibonacciInputButton");

let fibonacciServerCalculationCheckBox = document.getElementById("fibonacciServerCalculationCheckBox");


fibonacciInputButton.addEventListener('click',submitFibonacciInput)
function submitFibonacciInput(e){

    e.preventDefault();

    let userInput = fibonacciInputNode.value;
    if(userInput == "")
        return;
    if (userInput < fibonacciInputMin) {
        showFibonacciInputBelowMinRangeError(fibonacciInputMin);
        return;
    }
    if(userInput>fibonacciInputMax){
        showFibonacciInputAboveMaxRangeError(fibonacciInputMax);
        return;
    }
    clearFibonacciInputError();

    if(fibonacciServerCalculationCheckBox.checked){

        showFibonacciResultSpinner();
        calculateFibonacciAtServerSide(userInput, calculateFibonacciComplete);
    }
    else{
        let result = calculateFibonacci(userInput);
        updateFibonacciDisplay(result);
        
    }

    
}
function calculateFibonacciComplete(result){
    updateFibonacciDisplay(result);
    refreshFibonacciResultsDisplay();
}
let fibonacciInputError = document.getElementById("fibonacciInputError");
function clearFibonacciInputError(){
    fibonacciInputError.textContent = "&#8203;";
    fibonacciInputError.classList.add("invisible");
    fibonacciInputNode.classList.remove("border-danger");

}
function showFibonacciInputAboveMaxRangeError(maxNumber){
    
    showFibonacciInputError();

    let errorMessage = `Can't be larger than ${maxNumber}`;
    fibonacciInputError.textContent = errorMessage;
}
function showFibonacciInputBelowMinRangeError(minNumber){
    
    showFibonacciInputError();

    let errorMessage = `Can't be smaller than ${minNumber}`;
    fibonacciInputError.textContent = errorMessage;
}
function showFibonacciInputError(){
    fibonacciInputError.classList.remove("invisible");
    fibonacciInputNode.classList.add("border-danger");
}