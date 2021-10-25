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
let resultsListDisplay = document.getElementById("resultsList");

function refreshFibonacciResultsDisplay(){
    fetchFibonacciResults(updateFibonacciResultsDisplay);
}
function fibonacciResultSortComparer(first, second){
    if(first["createdDate"]<second["createdDate"])
        return -1;
    if(first["createdDate"]>second["createdDate"])
        return 1;
    if(first["createdDate"]==second["createdDate"])
        return 0;
}
let lastFetchedResultIndex = 0;
function updateFibonacciResultsDisplay(fibonacciResultsData){
    
    fibonacciResultsData = fibonacciResultsData["results"];
    fibonacciResultsData.sort(fibonacciResultSortComparer);
    // fibonacciResultsData.reverse();

    for (lastFetchedResultIndex; lastFetchedResultIndex < fibonacciResultsData.length; lastFetchedResultIndex++) {
        const fibonacciResultData = fibonacciResultsData[lastFetchedResultIndex];

        var createdDate = new Date(fibonacciResultData["createdDate"]);

        let resultsEntryNode = generateFibonacciResultEntryNode(fibonacciResultData["number"],
                                                                fibonacciResultData["result"],
                                                                createdDate);
        resultsListDisplay.prepend(resultsEntryNode);
        
    }
}
function generateFibonacciResultEntryNode(number,result,dateCreated){
    let resultsEntryNode = document.createElement("div");
    resultsEntryNode.classList.add("border-bottom");
    resultsEntryNode.classList.add("border-dark");
    resultsEntryNode.classList.add("pb-2");
      
    let numberNode = document.createElement("span");
    numberNode.classList.add("fw-bold");
    numberNode.textContent = number;
    let resultNode = document.createElement("span");
    resultNode.classList.add("fw-bold");
    resultNode.textContent = result;

    let createdDateNode = document.createElement("span");
    createdDateNode.textContent = dateCreated;
    resultsEntryNode.innerHTML+="The Fibonacci Of "
    resultsEntryNode.appendChild(numberNode);
    resultsEntryNode.innerHTML+=" is "

    resultsEntryNode.appendChild(resultNode);
    resultsEntryNode.innerHTML+=". Calculated at: "

    resultsEntryNode.appendChild(createdDateNode);
    return resultsEntryNode;
}
refreshFibonacciResultsDisplay();