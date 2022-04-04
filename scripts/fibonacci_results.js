function fetchResults(onComplete) {
  const url = "http://localhost:3000/getFibonacciResults";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const results = data;

      onComplete(results);
    });
}
export async function fetchResultsAsync() {
  const url = "http://localhost:3000/getFibonacciResults";
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
