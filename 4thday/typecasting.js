/*
Type Casting or Type conversion in JS
1.	Converting one data type to another data type.
2.	i.e string type to Boolean or form int to string.
3.	Implicit conversion happens when runtime automatically converts data type.
*/
//eg. of implicit conversion(type coercion)
let num=7;
let str='6';
console.log(num+str);//took both value as string
if (num==str){
    console.log('equal');
}
if (num===str){
    console.log('equal');
}else{
    console.log('no equal');
}

