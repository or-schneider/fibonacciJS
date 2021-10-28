let fibonacciResultNode = document.getElementById("fibonacciResult");
let fibonacciResultSpinner = document.getElementById("fibonacciResultSpinner");

function showFibonacciResultSpinner(){
    fibonacciResultNode.innerHTML = "&#8203; &nbsp;";
    fibonacciResultNode.classList.add("invisible");
    showSpinner(fibonacciResultSpinner);
}
function updateFibonacciDisplay(fibonacciResult, error){
    hideSpinner(fibonacciResultSpinner);

    fibonacciResultNode.classList.remove("invisible");

    let displayText;

    if(error){
        displayText =`Server Error: ${error}`;
        applyFibonacciDisplayErrorStyle();
    }
    else{
        displayText = fibonacciResult;
        applyFibonacciDisplaySuccessStyle();
    }

    fibonacciResultNode.innerHTML = displayText;
}
function applyFibonacciDisplaySuccessStyle(){
    fibonacciResultNode.classList.add("text-decoration-underline");
    fibonacciResultNode.classList.remove("text-danger");

    fibonacciResultNode.classList.add("fw-bold");
    fibonacciResultNode.classList.remove("h7");
    fibonacciResultNode.classList.add("h5");
}
function applyFibonacciDisplayErrorStyle(){
    fibonacciResultNode.classList.add("text-danger");
    fibonacciResultNode.classList.remove("text-decoration-underline");
    
    fibonacciResultNode.classList.remove("fw-bold");
    fibonacciResultNode.classList.remove("h5");
    fibonacciResultNode.classList.add("h7");


}