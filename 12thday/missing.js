function findMissingNumbers(array) {
    // Create an array containing numbers from 1 to 100
    const fullRange = Array.from({ length: 100 }, (_, index) => index + 1);

    // Use filter to find the missing numbers
    const missingNumbers = fullRange.filter((number) => !array.includes(number));

    return missingNumbers;
}

let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 1, 0];

console.log(`Missing numbers from the range 1-100 in array A: [${findMissingNumbers(A)}]`);
console.log(`Missing numbers from the range 1-100 in array B: [${findMissingNumbers(B)}]`);