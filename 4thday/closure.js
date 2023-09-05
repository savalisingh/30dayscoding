function outer(){
    var g =50;
    function inner(){
        var h=30;
        console.log(g+h);
    }
    return inner
}
let x=outer();
x();

function numberfunc(){
    let i=0;
    function incrementfun(){
        let j=10;
        console.log(`i= ${i++} ,j= ${j++}`);
    }
    return incrementfun
}
let z=numberfunc();
let y=numberfunc();
z();
z();
z();
z();
y();