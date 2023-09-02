function arrayequal(a1,a2){
    if (a1.length !== a2.length){
        return false;
    }

    for (let i=0; i<a1.length;i++){
        if (a1[i] !==a2[i]){
            return false;
        }
    }
    return true;
}

const a1=[1,2,3,4,5];
const a2=[1,2,5,4,5];
if (arrayequal(a1,a2)){
    console.log('both are equal')
}else{
    console.log('not equal')
}
