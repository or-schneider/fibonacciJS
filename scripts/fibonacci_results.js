function fetchResults(onComplete){
    const url = "http://localhost:3000/getFibonacciResults"
    fetch(url)
    .then(response => {
      return response.json()})
    .then(data =>{
        let results = data;
        
        onComplete(results);
    });
}
export async function fetchResultsAsync(){
  const url = "http://localhost:3000/getFibonacciResults"
  let response = await fetch(url);
  let data = await response.json();
  return data.results;
}