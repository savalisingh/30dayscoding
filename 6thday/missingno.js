const missingElementsArray = function (array1, array2) {
  let missing = [];

  array1.forEach(function (element1) {
    let found = false;
    
    array2.forEach(function (element2) {
      if (element1 === element2) {
        found = true;
      }
    });
    if (!found) {
      missing.push(element1);
    }
  });
  return missing;
};
let Aa = [0, 1, 2, 3, 4, 5];
let Bb = [5, 4, 3, 2, 0];
const missingElements = missingElementsArray(Aa, Bb);
console.log(`missing elements: ${missingElements}`);
