let productof2=function(array){
    result1=[];
    result2=[];
    array.forEach((value,index) => {
        let num=value%2;
        if(value==0){
            index++;
        }else if(num==0){
            result1.push(value);
        }else{
            result2.push(value);
        } 
    });
    
    return result1;
}
A=[0,1,2,3,4,5];
B=[5,4,3,2,1,0];
console.log(productof2(A));
console.log(productof2(B));