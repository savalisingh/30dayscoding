/*
Var
1.	To declare variable, and we can re-declare same variable again in JS code later.
2.	Scope of variable is global or functional
3.	Can declare variable value again.
Let
1.	To declare variable, and we cannot re-declare same variable again in JS code later.
2.	Variable have block scope. Cannot access variable form outside of block.
3.	Can declare variable value again.
const
1.	To declare variable, and we cannot re-declare same variable again in JS code later.
2.	Variable have block scope. Cannot access variable form outside of block .
3.	We cannot declare variable value again. Value of const is fixed.

note:it's a good practice to use let when you need a variable that might change its value 
and const when you want to declare a variable that should not be re-assigned. 
Avoid using var in modern JavaScript, as it has some quirks and doesn't provide the same level of scoping control as let and const.
*/
//eg. 
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
    var a=11;
    //let b=21; we can not declare same variable again in let 
    //const c=31; we can not declare same variable again in const
    console.log(a);
    console.log(b);
    console.log(c);
    a=12;
    b=22;
    //c=32;we can not reassign value to variable again  
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
//console.log(b); we can not access let outside scope of it's block
//console.log(c); we can not access const outside scope of it's block