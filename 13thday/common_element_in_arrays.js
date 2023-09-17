//common element in 2 array

/*
we can pass 2 arrgument to function
here i have used map to 1st take array1 element and it's index then 
inside it used another function and their used some function over 2array 
some actually itarating over every element of array1 even one satisfy condition it will true 
and if not even single element matches print false
i.e element1===element2 if condit
to find if they have common element
 */ 
const common = (array1, array2) => array1.map((element1) => {
    return array2.some((element2) => element1 === element2);
  });
let A = [0, 1, 2, 3,4, 5];
let B = [5, 4, 3,3, 2, 1];
console.log(common(A,B));

//print element not boolean 

const commonno = (array1, array2) => {
    return array1.filter((element1) => {
      return array2.includes(element1);
    });
  };
  
  console.log(commonno(A, B)); // Output: [1, 2, 3, 4, 5]