/*spread and rest operator:
The spread operator (...) is a powerful feature of ES6 
that allows you to expand an iterable (e.g., an array or a string) into individual elements. 
used in various contexts to make your code more concise and expressive.  */
//1.Expanding Arrays:You can use the spread operator to expand the elements of an array into another array or as function arguments.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Creates a new array [1, 2, 3, 4, 5]

// Using spread operator as function arguments
function add(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const sum = add(...numbers); // Equivalent to add(1, 2, 3), result is 6

//2.Copying Arrays:You can easily create a copy of an array using the spread operator.
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Creates a new array with the same elements

//3.Merging Arrays:The spread operator can be used to merge arrays.
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2]; // Creates a new array [1, 2, 3, 4]

//4.Expanding Strings:You can also use the spread operator to expand the characters of a string into an array of characters.
const str = "hello, hi i am Savali ";
const charArray = [...str]; // Creates an array ["h", "e", "l", "l", "o"]