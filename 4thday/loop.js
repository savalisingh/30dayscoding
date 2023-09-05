/*
Loops/Iteration:Loops are essential in programming to iterate through arrays, lists, or other data structures and perform actions on each item.

For loop:A for loop is a basic loop construct used for iterating a specific number of times.
You can use it to iterate over a range of values using a counter variable.
syntex:
for (start condition;break condition;incremental phase){
    
}
start condition:initialize the loop value to a certain value
break condition: this is when to condition to be fulfilled and stop from futher iteration
increment phase: how much loop variable to be increment/decrement per iteration.
*/
for (i=0;i<5;i++){
    console.log('for loop output:'+i);
}

//For/in loop:used to iterate over the keys (indexes) of an object.
obj=[1,3,5,7,8]
for (let x in obj){
    console.log('for/in output: to get index '+x);
}
//we can use obj(x) to access values
array=[11,13,54,57,83]
for (let x in array){
    console.log('for/in output: to get value '+array[x]);
}

//For/of loop:direct access to the values themselves rather than indexes.
for (let x of array){
    console.log('for/of output: to get value '+x);
}

/*
ForEach:used to iterate over the elements of an array and perform an action on each element.
only deal with array 
syntex:
*/
array.forEach((value,index) => {
    console.log(`Index ${index}: ${value}`);
});

//Note : the forEach method doesn't support break, so you may need to use a for loop if you need to break out of the iteration prematurely.

