/*map:it take items of array one by one and apply it's property and return the item one by one
used to iterate over an array and apply a function to each element in the array. 
It creates a new array with the results of applying the function to each element. */
//eg.

const num = [1, 2, 3];
const double = num.map(item => {
    return item * 2;
});

console.log(double[1]);
/*So, the map method is a powerful tool for transforming each element of an array 
and creating a new array based on the applied transformation. 
It's a commonly used method for tasks like mapping data, formatting, or performing calculations on array elements. */

/*filter:return value when condition is true 
used to create a new array with all elements that pass a specific condition or criteria defined in a callback function*/
//eg
const value=num.filter(item=>{
    return item>2;
})
console.log(value);
/*So, the filter method is useful for extracting elements from an array that meet specific criteria, 
creating a new array that contains only those elements. */

/*reduce:it does operation and return single value 
used to iterate over an array and accumulate a single value by applying a 
specified function to each element of the array.*/
//eg
const sum=num.reduce(function(previous,current){
    return previous+current;
});
console.log(sum);

/*The reduce method is a versatile tool for performing various types of accumulation or 
aggregation operations on an array, such as calculating sums, products, averages, and more. 
It's a powerful and flexible method for processing arrays and obtaining a single result based on the elements of the array. */