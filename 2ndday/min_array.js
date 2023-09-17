//find smallest number
function minarray(array) {
    if (array.length === 0) {
      return null;
    }
  
    let minno = array[0];
  
    for (let i = 1; i < array.length; i++) {
      let currentno = array[i];
      if (currentno < minno) {
        minno = currentno;
      }
    }
    return minno;
  }
  
  let myarray2 = [1, 4, -4, -43, 3, 43];
  console.log('Minimum number in the array:', minarray(myarray2));

  //using method
  let minimum=myarray2.reduce((current,mini)=>current<mini?`${current}`:`${mini}`,myarray2[0])
console.log(`Minimum number in the array: ${minimum}`)