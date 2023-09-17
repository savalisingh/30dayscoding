//finding max number in array
function maxarray(array) {
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

let myarray = [1, 4, -4, 43, 3, -43];
console.log("Max number in the array:", maxarray(myarray));

//other way

let maxelement = myarray.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
}, myarray[0]);

let maxelemens = myarray.reduce(
  (max, current) => (current > max ? `${current}` : `${max}`),
  myarray[0]
);
console.log("Max number in the array:", maxelemens);
console.log("Max number in the array:", maxelement);
