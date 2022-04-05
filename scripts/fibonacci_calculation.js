function calculate(n) {
  let sum = 0;

  let number1 = 0;
  let number2 = 1;

  for (let i = 0; i < n; i++) {
    let sumAtStart = sum;
    sum = number1 + number2;

    number1 = sumAtStart;
    number2 = sum;
  }
  return sum;
}

export const calculateRecursive = (function () {
  const resultsCache = [0, 1];

  return function fibonacciRecursive(n) {
    if (resultsCache.length > n) return resultsCache[n];

    if (n <= 1) return n;

    const sum = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    resultsCache[n] = sum;
    return sum;
  };
})();

export async function calculateServerSideAsync(
  n,
  onComplete = (result, error) => {}
) {
  const url = `http://localhost:3000/fibonacci/${n}`;

  let serverError = null;
  let serverResult = null;

  try {
    const response = await fetch(url);

    let data;

    if (!response.ok) {
      data = await response.text();
      serverError = data;
    } else {
      data = await response.json();
      serverResult = data["result"];
    }
  } catch (error) {
    serverError = error.message;
  }
  onComplete(serverResult, serverError);
}
