let fibonacciResultNode = document.getElementById("fibonacciResult");
let fibonacciResultSpinner = document.getElementById("fibonacciResultSpinner");

function showFibonacciResultSpinner(){
    fibonacciResultNode.innerHTML = "&#8203; &nbsp;";
    fibonacciResultNode.classList.add("invisible");
    showSpinner(fibonacciResultSpinner);
}
function updateFibonacciDisplay(fibonacciResult){
    hideSpinner(fibonacciResultSpinner);
    
    fibonacciResultNode.innerHTML = fibonacciResult;
    fibonacciResultNode.classList.remove("invisible");


}