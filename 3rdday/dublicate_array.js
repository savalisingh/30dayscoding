//dublicates the array
let A= [1, 2, 3, 4, 0];
const duplicateArray1 = A.concat();
console.log(duplicateArray1);
let B = [1, 2, 3, 4, 0];
const duplicateArray2 = B.concat();
console.log(duplicateArray2);

//without using method
coppiedarr1=[...A];
coppiedarr2=[...B];
console.log(coppiedarr1)
console.log(coppiedarr2)