function evenodd(array,arrayName){
    let even=[];
    let odd=[];
    array.forEach(element => {
        let num=element%2;
        if(num==0){
            even.push(element);
        }else{
            odd.push(element);
        }
    });
    return console.log(`array ${arrayName} [${array}] contains even no. [${even}] odd no. [${odd}]`);
}
A1=[1,2,5,4,0] 
B1=[1,2,5,4,0] 
evenodd(A1,"A1");
evenodd(B1,"B1");
A2=[1,2,3,4,5];
B2=[11, 22, 33 ,44];
evenodd(A2,"A2");
evenodd(B2,"B2");