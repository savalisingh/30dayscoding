function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  function arePrimes(array) {
    return array.map((value) => isPrime(value));
  }
  
const A1 = [1, 2, 8,5, 4,7];
const A2 = [1, 2, 3, 4, 5];
console.log(arePrimes(A1));
console.log(arePrimes(A2));