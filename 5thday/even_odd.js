function evenodd(array){
    array.forEach((value,index) => {
        console.log(`Index ${index}: ${value}`);
        let even=value%2;
        if(even==0){
            console.log('this is even');
        }else{
            console.log('this is odd');
        }
    });
}
function even_odd(array){
    for(i=0;i<array.length;i++) {
        console.log(`Index ${i}: ${array[i]}`);
        let even=array[i]%2;
        if(even==0){
            console.log('this is even');
        }else{
            console.log('this is odd');
        }
        
    };
}
//case1.
let A=[1,2,5,4,0];
let B=[1,2,5,4,0];
evenodd(A);
evenodd(B);

//case2.
let C=[1,2,3,4,5];
let D=[11, 22, 33 ,44];
even_odd(C);
even_odd(D);