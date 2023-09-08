function merge(array1,array2){
    let copyItem=[];
    array1.forEach(element => {
        copyItem.push(element);
    });
    array2.forEach(element => {
        copyItem.push(element);
    });
    return copyItem;
}
console.log(`merge of arrays are [${merge(A,B)}]`);