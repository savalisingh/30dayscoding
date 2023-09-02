function keyarray1(array) {  
    for (let i = 1; i < array.length; i++) {
      let currentno = array[i];
      if (currentno === 4) {
        return true;
      }
    }
    return false;
}

function keyarray2(array) {  
    for (let i = 1; i < array.length; i++) {
      let currentno = array[i];
      if (currentno === 33) {
        return true;
      }
    }
    return false;
}
let myarray3 = [1,3,4, -4, -43, 3, 43];
let myarray4 = [1,3,4, -4, -43, 33, 43];
if(keyarray1(myarray3)){
    console.log('key is found');
}else{
    console.log('key not found')
}

if(keyarray2(myarray4)){
    console.log('key is found');
}else{
    console.log('key not found')
}

//or
// above is my logic below is found after serching
function keyarray(array, target) {  
    return array.includes(target);
  }
  
  let myarray5 = [1, 3, 4, -4, -43, 3, 43];
  let myarray6 = [1, 3, 4, -4, -43, 3, 43];
  
  if (keyarray(myarray5, 4)) {
    console.log('key is found');
  } else {
    console.log('key not found');
  }
  
  if (keyarray(myarray6, 33)) {
    console.log('key is found');
  } else {
    console.log('key not found');
  }