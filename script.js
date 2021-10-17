let fibonacciN = 13;


function fibbonaci(n){
    
    let sum = 0;
    
    if(n == 0){
        sum = 0;
        return sum;
    }
    if(n == 1){
        sum = 1;
        return sum;
    }
    let number1 = 1;
    let number2 = 1;

    for (let i = 2; i < n; i++) {
        sum = number1+number2;
        number1 = number2;
        number2 = sum;
    }
    return sum;
}

let fibonnachiResult = fibbonaci(fibonacciN);

let fibonnaciResultNode = document.getElementById("fibonnaciResult");
fibonnaciResultNode.innerHTML = `The Fibonacci of ${fibonacciN} is ${fibonnachiResult}`;