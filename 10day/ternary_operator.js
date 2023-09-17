/* if else and else if
if statement executes a statement if a specified condition true 
if not true than checks else if condition if it is true or not 
(we can provide lots of else if condition if required)
else condition if none of them is true
*/
//eg
let i=3;
if(i===0){
    console.log('i=0');
}else if(i===1){
    console.log('i=1');
}else{
    console.log('i is greater than 1')
}
/*
The ternary operator, also known as the conditional operator, 
is a concise way to express conditional (if-else) statements in many programming languages,
 including JavaScript. It allows you to write a single expression that evaluates a condition 
and returns one of two values based on whether the condition is true or false.
 */
//syntex
//condition ? expression_if_true : expression_if_false;
//eg
let age = 25;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"