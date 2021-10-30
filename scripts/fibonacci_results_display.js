let fibonacciResultsSpinner = document.getElementById("fibonacciResultsSpinner");

function showFibonacciResultsSpinner(){
    showSpinner(fibonacciResultsSpinner);
}
let resultsListDisplay = document.getElementById("resultsList");

async function refreshFibonacciResultsDisplay(){
    showFibonacciResultsSpinner();
    let results = await fetchFibonacciResultsAsync();
    
    generateFibonacciResultsDisplay(results);
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
let fibonacciResultsNodes = [];

function generateFibonacciResultsDisplay(fibonacciResultsData){
    fibonacciResultsData.sort(fibonacciResultSortComparer);
    
    for (lastFetchedResultIndex; lastFetchedResultIndex < fibonacciResultsData.length; lastFetchedResultIndex++) {
        const fibonacciResultData = fibonacciResultsData[lastFetchedResultIndex];

        var createdDate = new Date(fibonacciResultData["createdDate"]);

        let resultsEntryNode = generateFibonacciResultEntryNode(fibonacciResultData["number"],
                                                                fibonacciResultData["result"],
                                                                createdDate);
        resultsListDisplay.prepend(resultsEntryNode);
        fibonacciResultsNodes.push(resultsEntryNode);

    }
    hideSpinner(fibonacciResultsSpinner);

}
function updateFibonacciResultsDisplay(fibonacciResultsData){
    for (let i = 0; i < fibonacciResultsData.length; i++) {
        const fibonacciResultData = fibonacciResultsData[i];

        var createdDate = new Date(fibonacciResultData["createdDate"]);

        updateFibonacciResultEntryNode(fibonacciResultsNodes[i],fibonacciResultData["number"],
                                                                fibonacciResultData["result"],
                                                                createdDate)
    }

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
function updateFibonacciResultEntryNode(resultsEntryNode,number,result,dateCreated){

    let resultsEntryNodes = resultsEntryNode.querySelectorAll('span');

    let numberNode = resultsEntryNodes[0];
    numberNode.textContent = number;

    let resultNode = resultsEntryNodes[1];
    resultNode.textContent = result;

    let createdDateNode = resultsEntryNodes[2];
    createdDateNode.textContent = dateCreated;
}



refreshFibonacciResultsDisplay();