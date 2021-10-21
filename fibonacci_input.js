let fibonacciInputNode = document.getElementById("fibonacciInput");
let fibonacciInputButton = document.getElementById("fibonacciInputButton");

fibonacciInputButton.addEventListener('click',submitFibonacciInput)
function submitFibonacciInput(e){

    let userInput = fibonacciInputNode.value;
    if(userInput < 1 || userInput>50 || userInput == ""){

        return;
    }
    let result = calculateFibonacci(userInput);
    updateFibonacciDisplay(result);
    e.preventDefault();

}
