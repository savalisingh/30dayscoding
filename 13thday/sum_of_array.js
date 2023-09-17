//finding array sum equal or not and also returnning their some

let A = [0, 1, 2, 3,4, 5];
let B = [5, 4, 3,3, 2, 1];

let sum= array=> array.reduce((acc,value)=>{
    let updatesum=acc+value;
    return updatesum;
},0)

let sumA=sum(A);
let sumB=sum(B);
console.log(sumA);
console.log(sumB);

let areSumsEqual = sumA === sumB ? true : false;

console.log(areSumsEqual);

