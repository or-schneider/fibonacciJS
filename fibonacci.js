function calculateFibonacci(n){
    
    let sum = 0;
    
    let number1 = 0;
    let number2 = 1;

    for (let i = 0; i < n; i++) {
        let sumAtStart = sum;
        sum = number1+number2;

        number1 = sumAtStart;
        number2 = sum;
    }
    return sum;
}
function calculateFibonacciAtServerSide(n){
    
    const url = `http://localhost:5050/fibonacci/${n}`
    
    fetch(url)
  .then(response => response.json())
  .then(data =>{
      updateFibonacciDisplay(data["result"]);
    });
}
