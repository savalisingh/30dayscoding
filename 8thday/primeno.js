function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    let divisor = 3;
    while (divisor * divisor <= number) {
        if (number % divisor === 0) {
            return false;
        }
        divisor += 2;
    }
    return true;
}
if(number/i==);
function prime(array) {
    const primeNumbers = [];
    array.forEach((value) => {
        if (isPrime(value)) {
            primeNumbers.push(value);
        }
    });
    return primeNumbers;
}

const A1 = [1, 2, 5, 4,7, 0];
const A2 = [1, 2, 3, 4, 5];
console.log(prime(A));