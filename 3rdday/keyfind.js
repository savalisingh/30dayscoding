function keyfind(array, target) {
  return array.includes(target);
}

const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];
if (keyfind(A, 1)) {
  console.log("key is found");
} else {
  console.log("key not found");
}

if (keyfind(B, 1)) {
  console.log("key is found");
} else {
  console.log("key not found");
}
