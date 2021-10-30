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
    
    clearFibonacciInputError();

    if(fibonacciServerCalculationCheckBox.checked){

        showFibonacciResultSpinner();
        calculateFibonacciAtServerSideAsync(userInput, calculateFibonacciAtServerComplete);
    }
    else{
        let success = validateInput(userInput);
        if(!success)
            return;
        let result = calculateFibonacciRecursive(userInput);
        updateFibonacciDisplay(result);
        
    }

    
}
function validateInput(userInput){
    if (userInput < fibonacciInputMin) {
        showFibonacciInputBelowMinRangeError(fibonacciInputMin);
        return false;
    }
    if(userInput>fibonacciInputMax){
        showFibonacciInputAboveMaxRangeError(fibonacciInputMax);
        return false;
    }
        return true;

}
function calculateFibonacciAtServerComplete(result, error){
        updateFibonacciDisplay(result, error);
        if(!error)
            refreshFibonacciResultsDisplay();
}
let fibonacciInputError = document.getElementById("fibonacciInputError");
function clearFibonacciInputError(){
    fibonacciInputError.textContent = "&#8203;";
    fibonacciInputError.classList.add("invisible");
    fibonacciInputNode.classList.remove("border-danger");
    fibonacciInputNode.classList.remove("text-danger");

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
function showFibonacciInputServerError(errorMessage){
    showFibonacciInputError();
    console.log(errorMessage);
    fibonacciInputError.textContent = errorMessage;
}
function showFibonacciInputError(){
    fibonacciInputError.classList.remove("invisible");
    fibonacciInputNode.classList.add("border-danger");
    fibonacciInputNode.classList.add("text-danger");

}