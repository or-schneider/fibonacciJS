let fibonacciResultsSpinner = document.getElementById("fibonacciResultsSpinner");

function showFibonacciResultsSpinner(){
    showSpinner(fibonacciResultsSpinner);
}
let resultsListDisplay = document.getElementById("resultsList");

async function refreshFibonacciResultsDisplay(){
    showFibonacciResultsSpinner();
    let results = await fetchFibonacciResultsAsync();
    updateFibonacciResultsDisplay(results);
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
    fibonacciResultsData.sort(fibonacciResultSortComparer);
    
    for (lastFetchedResultIndex; lastFetchedResultIndex < fibonacciResultsData.length; lastFetchedResultIndex++) {
        const fibonacciResultData = fibonacciResultsData[lastFetchedResultIndex];

        var createdDate = new Date(fibonacciResultData["createdDate"]);

        let resultsEntryNode = generateFibonacciResultEntryNode(fibonacciResultData["number"],
                                                                fibonacciResultData["result"],
                                                                createdDate);
        resultsListDisplay.prepend(resultsEntryNode);
        
    }
    hideSpinner(fibonacciResultsSpinner);

}
function generateFibonacciResultEntryNode(number,result,dateCreated){
    let resultsEntryNode = document.createElement("li");
    resultsEntryNode.classList.add("border-bottom");
    resultsEntryNode.classList.add("border-dark");
    resultsEntryNode.classList.add("pb-2");
    resultsEntryNode.classList.add("pt-2");
      
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