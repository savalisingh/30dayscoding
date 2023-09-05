/*
Map():
The map() function is a higher-order array method used to transform elements in an array by applying a provided function to each element and creating a new array with the results. 
It allows you to create a new array where each element is derived from the corresponding element in the original array after applying the provided function.
map() function is use to transform elements in various ways, such as performing calculations, formatting data, or selecting specific properties,
Syntax:
const newArray = array.map(callback(currentValue[, index[, array]]) {
  // return new element
});
array: The original array that you want to iterate over.
callback: A function that is called for each element in the array. It can accept up to three arguments:
    currentValue: The current element being processed in the array.
    index (optional): The index of the current element in the array.
    array (optional): The array on which map() was called.
The callback function should return the new value that you want to appear in the new array.
*/

const hero = [
    { name: 'A.P.J abdul kalam', country: 'India' },
    { name: 'Xena', country: 'Greece' },
    { name: 'Alecander the great', country: 'Macedonia' },
  ];
  
  // Use map() to extract only the 'name' property from each object
  const namesArray = hero.map((person) => person.name);
  
  console.log(namesArray); // Output: ['Alice', 'Bob', 'Charlie']