import * as spinnerEnabler from "./spinner.js"
import {fetchResultsAsync} from "./fibonacci_results.js"

const resultsSpinner = document.getElementById("fibonacciResultsSpinner");

function showSpinner(){
    spinnerEnabler.showSpinner(resultsSpinner);
}
const resultsListDisplay = document.getElementById("resultsList");

export async function refreshDisplay(){
    showSpinner();
    let results = await fetchResultsAsync();
    newestResultsData = results;

    generateDisplay(results);
    updateDisplay(results);
}
function sortByDateComparer(first, second){
    if(first["createdDate"]<second["createdDate"])
        return -1;
    if(first["createdDate"]>second["createdDate"])
        return 1;
    if(first["createdDate"]==second["createdDate"])
        return 0;
}
function sortByNumberComparer(first, second){
    if(first["number"]<second["number"])
        return -1;
    if(first["number"]>second["number"])
        return 1;
    if(first["number"]==second["number"])
        return 0;
}
function sortResults(results,isAsc,sortComparer){
    results.sort(sortComparer);
    if(!isAsc)
        results.reverse();
}
const sortNodeIdsToFunctions={"fibonacciResultsSortByDateAsc":(results)=>
                                sortResults(results, true,sortByDateComparer),
                            "fibonacciResultsSortByDateDesc":(results)=>
                                sortResults(results, false, sortByDateComparer),
                            "fibonacciResultsSortByNumberAsc":(results)=>
                                sortResults(results, true, sortByNumberComparer),
                            "fibonacciResultsSortByNumberDesc":(results)=>
                                sortResults(results, false, sortByNumberComparer)}

let activeSortFunction = sortNodeIdsToFunctions.fibonacciResultsSortByDateAsc;

function initSortButton(){
    document.getElementById("fibonacciResultsSortByDropdown").addEventListener('click',(event)=>{
        activeSortFunction = sortNodeIdsToFunctions[event.target.id];
        updateDisplay(newestResultsData);
    });
}

let lastFetchedResultIndex = 0;
let newestResultsData = [];
let entriesComponentsNodesArray = [];

function generateDisplay(resultsData){
    resultsData.sort(sortByDateComparer);
    
    for (lastFetchedResultIndex; lastFetchedResultIndex < resultsData.length; lastFetchedResultIndex++) {

        let elements = generateResultEntryNode("","","");
        let resultsEntryNode = elements[0];
        let resultsEntryComponentsNodes = elements[1];

        resultsListDisplay.prepend(resultsEntryNode);
        entriesComponentsNodesArray.push(resultsEntryComponentsNodes);

    }
    spinnerEnabler.hideSpinner(resultsSpinner);

}
function updateDisplay(resultsData){
    activeSortFunction(resultsData);

    for (let i = 0; i < resultsData.length; i++) {
        const resultData = resultsData[i];

        var createdDate = new Date(resultData["createdDate"]);

        updateResultEntryNode(entriesComponentsNodesArray[i],resultData["number"],
                                                                resultData["result"],
                                                                createdDate)
    }

}
function generateResultEntryNode(number,result,dateCreated){
    let entryNode = document.createElement("li");
    entryNode.classList.add("border-bottom");
    entryNode.classList.add("border-dark");
    entryNode.classList.add("pb-2");
    entryNode.classList.add("pt-2");
      
    let numberNode = document.createElement("span");
    numberNode.classList.add("fw-bold");
    numberNode.textContent = number;
    let resultNode = document.createElement("span");
    resultNode.classList.add("fw-bold");
    resultNode.textContent = result;
    let createdDateNode = document.createElement("span");
    createdDateNode.textContent = dateCreated;

    entryNode.appendChild(document.createTextNode("The Fibonacci Of "));
    entryNode.appendChild(numberNode);
    entryNode.appendChild(document.createTextNode(" is "));
    entryNode.appendChild(resultNode);
    entryNode.appendChild(document.createTextNode(". Calculated at: "));
    entryNode.appendChild(createdDateNode);

    let entryComponentsNodes = {"number":numberNode,"result":resultNode,"createdDate": createdDateNode};
    return [entryNode,entryComponentsNodes];
}
function updateResultEntryNode(entryComponentsNodes,number,result,dateCreated){

    let numberNode = entryComponentsNodes.number;
    numberNode.textContent = number;

    let resultNode = entryComponentsNodes.result;
    resultNode.textContent = result;

    let createdDateNode = entryComponentsNodes.createdDate;
    createdDateNode.textContent = dateCreated;
}

function init(){

    refreshDisplay();
    initSortButton();
}

init();
