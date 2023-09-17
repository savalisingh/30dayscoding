//finding middle element of 2 mereged arrays

let A = [1, 2, 3,4, 0];
let B = [1, 2, 3,4, 35];

const mergedArray = [...A, ...B];
console.log(mergedArray)
const middleIndex = Math.floor(mergedArray.length / 2);

if (mergedArray.length % 2 === 0) {
    const middleElement1 = mergedArray[middleIndex - 1];
    const middleElement2 = mergedArray[middleIndex];
    console.log(middleElement1,middleElement2)
  } else {
    console.log(mergedArray[middleIndex]);
  }

  //using 3 arrays
  let C = [1, 2, 3,4, 0];

  const mergedArrays = [...A, ...B, ...C];
  console.log(mergedArrays)

  const middleIndeces = Math.floor(mergedArrays.length / 2);
  if (mergedArrays.length % 2 === 0) {
    const middleElement1 = mergedArray[middleIndeces - 1];
    const middleElement2 = mergedArray[middleIndeces];
    console.log(middleElement1,middleElement2)
  } else {
    console.log(mergedArray[middleIndeces]);
  }
