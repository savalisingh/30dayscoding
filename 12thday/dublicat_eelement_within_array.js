const findCommonElements = function (array) {
    let common = [];
    // Iterate over each element in the array
    array.forEach(function (element, index) {
        // Check if the element occurs more than once in the array
        if (array.indexOf(element) !== index) {
            // Check if the element is not already in the common array
            if (!common.includes(element)) {
                common.push(element);
            }else{
                console.log('it does not have any common element')
            }
        }
    });

    return common;
}

let A = [0, 1, 1, 2 ,3,4, 3, 4, 5];
let B = [5,5,0,3, 4, 3, 2, 1, 0];
console.log(`common element inside array ${findCommonElements(A)}`);
console.log(`common element inside array ${findCommonElements(B)}`);
