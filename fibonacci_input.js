let fibonacciInputNode = document.getElementById("fibonacciInput");
let fibonacciInputButton = document.getElementById("fibonacciInputButton");

fibonacciInputButton.addEventListener('click',submitFibonacciInput)
function submitFibonacciInput(){
    let userInput = fibonacciInputNode.value;
    let result = fibonacci(userInput);
    updateFibonacciDisplay(userInput, result);
}