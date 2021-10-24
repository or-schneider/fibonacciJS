let fibonacciInputNode = document.getElementById("fibonacciInput");
let fibonacciInputButton = document.getElementById("fibonacciInputButton");

fibonacciInputButton.addEventListener('click',submitFibonacciInput)
function submitFibonacciInput(e){

    e.preventDefault();

    let userInput = fibonacciInputNode.value;
    if(userInput < 1 || userInput>50 || userInput == ""){

        return;
    }
    showFibonacciResultSpinner();
    calculateFibonacciAtServerSide(userInput, updateFibonacciDisplay);

    // let result = calculateFibonacci(userInput);
    // updateFibonacciDisplay(result);
}
