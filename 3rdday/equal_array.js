function arrayequal(array1,array2){
    if (array1.length !== array2.length){
        return false;
    }

    for (let i=0; i<array1.length;i++){
        if (array1[i] !==array2[i]){
            return false;
        }
    }
    return true;
}

const C = [1, 2, 3, 4, 0];
const D = [1, 2, 3, 4, 0];
if (arrayequal(C,D)){
    console.log('both are equal')
}else{
    console.log('not equal')
}

const E = [1, 2, 3, 4, 5];
const F = [11, 22, 33, 44,];
if (arrayequal(E,F)){
    console.log('both are equal')
}else{
    console.log('not equal')
}