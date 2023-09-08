function merge(array1,array2){
    let copyItem=0;
    array1.forEach(element => {
        copyItem+=(element);
    });
    array2.forEach(element => {
        copyItem+=(element);
    });
    return copyItem;
}
A=[0,1,2,3,4,5];
B=[5,4,3,2,1,0];
console.log(`sum of merge of arrays is [${merge(A,B)}]`);
