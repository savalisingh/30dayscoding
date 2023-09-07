const key=function(array,target){
    let found = false;
    for(let i=0;i<array.length;i++) {
        let keyvalue=array[i];
        if(keyvalue===target){
            console.log(`key is found at Index ${i}: ${array[i]}`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('Key is not found');
      }
}

let a=[0,1,2,1,3,4,5];
let b=[5,4,3,2,1,0];
key(a,1);
key(b,1);