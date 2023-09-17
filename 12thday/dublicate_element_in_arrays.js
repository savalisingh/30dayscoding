function common(array1, array2) {
    let commonelement = [];
    array1.forEach((element1) => {
        if (array2.includes(element1)) {
            commonelement.push(element1);
        }
    });
    return commonelement;
}

A = [0, 1, 2, 3, 5];
B = [5, 4, 3, 2, 1, 0];
console.log(`common element of arrays are [${common(A, B)}]`);