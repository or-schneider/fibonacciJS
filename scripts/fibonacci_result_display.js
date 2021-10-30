let resultNode = document.getElementById("fibonacciResult");
let resultSpinner = document.getElementById("fibonacciResultSpinner");

export function showResultSpinner(){
    resultNode.innerHTML = "&#8203; &nbsp;";
    resultNode.classList.add("invisible");
    showSpinner(resultSpinner);
}
export function updateDisplay(fibonacciResult, error){
    hideSpinner(resultSpinner);

    resultNode.classList.remove("invisible");

    let displayText;

    if(error){
        displayText =`Server Error: ${error}`;
        applyDisplayErrorStyle();
    }
    else{
        displayText = fibonacciResult;
        applyDisplaySuccessStyle();
    }

    resultNode.innerHTML = displayText;
}
function applyDisplaySuccessStyle(){
    resultNode.classList.add("text-decoration-underline");
    resultNode.classList.remove("text-danger");

    resultNode.classList.add("fw-bold");
    resultNode.classList.remove("h7");
    resultNode.classList.add("h5");
}
function applyDisplayErrorStyle(){
    resultNode.classList.add("text-danger");
    resultNode.classList.remove("text-decoration-underline");
    
    resultNode.classList.remove("fw-bold");
    resultNode.classList.remove("h5");
    resultNode.classList.add("h7");


}