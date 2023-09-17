//find maximum number in array
function maxarray1(array) {
  if (array.length === 0) {
    return null;
  }

  let maxno = array[0];

  for (let i = 1; i < array.length; i++) {
    let currentno = array[i];
    if (currentno > maxno) {
      maxno = currentno;
    }
  }
  return maxno;
}

let myarray1 = [1, 4, -4, -43, 3, 43];
console.log("Max number in the array:", maxarray1(myarray1));

//using method

let maximum = myarray1.reduce((current, max) =>current > max ? `${current}` : `${max}`,maxarray1[0] );

console.log(`Max number in the array is: ${maximum}`);
