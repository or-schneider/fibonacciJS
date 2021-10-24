let fibonacciResultNode = document.getElementById("fibonacciResult");
let fibonacciResultSpinner = document.getElementById("fibonacciResultSpinner");

function showFibonacciResultSpinner(){
    showSpinner(fibonacciResultSpinner);
    fibonacciResultNode.innerText = "";
}
function updateFibonacciDisplay(fibonacciResult){
    hideSpinner(fibonacciResultSpinner);
    
    fibonacciResultNode.innerHTML = fibonacciResult;

}