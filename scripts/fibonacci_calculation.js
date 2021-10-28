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
function calculateFibonacciAtServerSide(n, onComplete){
    
    const url = `http://localhost:5050/fibonacci/${n}`
    let isResponseText = false;

    fetch(url)
    .then(response => {
      if(!response.ok)
      {
          isResponseText = true;
          return response.text();
      }
      return response.json()})
    .then(data =>{
        let serverResult;
        let error = null;
        if(isResponseText){

            serverResult = null;
            error = data;
        }
            
        else  
            serverResult = data["result"];

        onComplete(serverResult,error);
    });
}
