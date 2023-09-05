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