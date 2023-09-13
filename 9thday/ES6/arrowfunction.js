/*Arrow Functions also called as fat arrow function due to their syntax, which includes a fat arrow (=>): Arrow functions provide a concise syntax for defining anonymous functions. 
They also capture the value of this from their surrounding context.
*/

//1.concise syntex:
/*Arrow functions are especially handy when the function body consists of a single expression. 
In such cases, you can omit the curly braces {} and the return keyword. */

//traditional way
const added = function(a, b) {
    return a + b;
}
//using arrow function
const add = (a, b) => a + b;

//2.Implicit Return:result of the expression is automatically returned without needing the return keyword

//3.Lexical this Binding:Arrow functions do not have their own this context; instead, they inherit the this value from the surrounding (lexical) context. This can be very helpful in certain scenarios, especially when dealing with callback functions or methods within objects.

function Person(name) {
    this.name = name;
    this.sayHello = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

//4.No Arguments Object:Arrow functions also do not have their own arguments object like traditional functions. Instead, they inherit the arguments object from the enclosing function if needed.
function sum() {
    const add = () => {
      console.log(arguments); // Uses the arguments object of the surrounding function.
    };
    add();
  }

  