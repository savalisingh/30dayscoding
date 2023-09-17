//reverse the array
const arr = [1, 2, 3];
reversed = arr.reverse();
console.log("reversed:", reversed);

//without useing method
let reversed_array = "";
for (let i = arr.length - 1; i >= 0; i--) {
  reversed_array += arr[i];
}

console.log(reversed_array);
