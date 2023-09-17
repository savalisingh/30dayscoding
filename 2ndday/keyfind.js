//find key

let myarray3 = [1, 3, 4, -4, -43, 3, 43];
let myarray4 = [1, 3, 4, -4, -43, 33, 43];
function keyarray1(array) {
  for (let i = 1; i < array.length; i++) {
    let currentno = array[i];
    if (currentno === 4) {
      return true;
    }
  }
  return false;
}

function keyarray1(array) {
  for (let i = 1; i < array.length; i++) {
    let currentno = array[i];
    if (currentno === 33) {
      return true;
    }
  }
  return false;
}

if (keyarray1(myarray3)) {
  console.log("key is found");
} else {
  console.log("key not found");
}

if (keyarray1(myarray4)) {
  console.log("key is found");
} else {
  console.log("key not found");
}

// above is my logic below is found after serching
function keyarray(array, target) {
  return array.includes(target);
}

if (keyarray(myarray3, 4)) {
  console.log("key is found");
} else {
  console.log("key not found");
}

if (keyarray(myarray4, 33)) {
  console.log("key is found");
} else {
  console.log("key not found");
}

//using some method

let key = 1;
let findkey = myarray3.some((element) => element === key);
if (findkey === true) {
  console.log(`${key} key is found `);
} else {
  console.log(`${key} key is not found`);
}
