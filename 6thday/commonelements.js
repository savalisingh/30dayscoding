const commonElementsArray = function (array1, array2) {
    let common = [];

    array1.forEach(function (element1) {
        array2.forEach(function (element2) {
            if (element1 === element2) {
                common+=element2;
            }
        });
    });

    return common;
}
let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 0];
const commonElements = commonElementsArray(A, B);
console.log(`Common elements: ${commonElements}`);


const findCommonElements = function (array) {
    let common = [];
    // Iterate over each element in the array
    array.forEach(function (element, index) {
        // Check if the element occurs more than once in the array
        if (array.indexOf(element) !== index) {
            // Check if the element is not already in the common array
            if (!common.includes(element)) {
                common.push(element);
            }
        }
    });

    return common;
}

let C = [0, 1, 2, 3, 4, 5, 3, 2, 1];
const commonElement = findCommonElements(C);
console.log(`Common elements within the array: ${commonElement}`);