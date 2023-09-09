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
A=[1,1,1,1,1];
B=[2,2,2,2,2];
console.log(`sum of merge of arrays is [${merge(A,B)}]`);
