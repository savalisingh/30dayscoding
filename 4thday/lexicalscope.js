/*
Lexical scope/static scope :
When we define function inside function (child function) have access to parent function scope too, nested function have access to all the way up to the global scope.
*/
//eg..
function myfunc(){
    console.log(sam);
}
function urfunc(){
    let sam=1;
    myfunc();
}
let sam=0;

urfunc();    