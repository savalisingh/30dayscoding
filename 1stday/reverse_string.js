//reverse the string

let e = "savali";
let d = e.split("").reverse().join("");
console.log("reverse of string savali", d);

//without using method
let reverse_set = "";
for (let i = e.length - 1; i >= 0; i--) {
  reverse_set += e[i];
}

console.log(`reverse of string savali ${reverse_set}`);
