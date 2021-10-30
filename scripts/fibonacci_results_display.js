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
let fibonacciResultsEntriesComponentsNodesArray = [];

function generateFibonacciResultsDisplay(fibonacciResultsData){
    fibonacciResultsData.sort(fibonacciResultSortComparer);
    
    for (lastFetchedResultIndex; lastFetchedResultIndex < fibonacciResultsData.length; lastFetchedResultIndex++) {

        let elements = generateFibonacciResultEntryNode("","","");
        let resultsEntryNode = elements[0];
        let resultsEntryComponentsNodes = elements[1];

        resultsListDisplay.prepend(resultsEntryNode);
        fibonacciResultsEntriesComponentsNodesArray.push(resultsEntryComponentsNodes);

    }
    hideSpinner(fibonacciResultsSpinner);

}
function updateFibonacciResultsDisplay(fibonacciResultsData){
    for (let i = 0; i < fibonacciResultsData.length; i++) {
        const fibonacciResultData = fibonacciResultsData[i];

        var createdDate = new Date(fibonacciResultData["createdDate"]);

        updateFibonacciResultEntryNode(fibonacciResultsEntriesComponentsNodesArray[i],fibonacciResultData["number"],
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

    resultsEntryNode.appendChild(document.createTextNode("The Fibonacci Of "));
    resultsEntryNode.appendChild(numberNode);
    resultsEntryNode.appendChild(document.createTextNode(" is "));
    resultsEntryNode.appendChild(resultNode);
    resultsEntryNode.appendChild(document.createTextNode(". Calculated at: "));
    resultsEntryNode.appendChild(createdDateNode);

    let resultsEntryComponentsNodes = {"number":numberNode,"result":resultNode,"createdDate": createdDateNode};
    return [resultsEntryNode,resultsEntryComponentsNodes];
}
function updateFibonacciResultEntryNode(entryComponentsNodes,number,result,dateCreated){

    let numberNode = entryComponentsNodes.number;
    numberNode.textContent = number;

    let resultNode = entryComponentsNodes.result;
    resultNode.textContent = result;

    let createdDateNode = entryComponentsNodes.createdDate;
    createdDateNode.textContent = dateCreated;
}



refreshFibonacciResultsDisplay();