function sum(array){
    const result=array.reduce(function(previous,current){
        return previous+current;
    });
    return result;
}
const A=[0,1,2,3,4,5];
const B=[5,4,3,2,1,0];
console.log(`sum of array ${A} is ${sum(A)}`);
console.log(`sum of array ${B} is ${sum(B)}`);