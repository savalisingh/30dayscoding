 /*
 Destructuring Assignment: Destructuring assignment enables you to 
extract values from objects and arrays into individual variables.
destucturing assignment syntax that make it possible to unpack values from arrays/properties from objects into distinct variables
 */
//for array:
let person=['sav',,'sin']
let [f,empty,lName ] = person;
console.log(f)
console.log(empty)

//for object:
let p = {
    firstname: 'ssfd',
    lastname: 'sdfas',
    address: {
      city: 'sadf',
      state: 'alskdj',
    }
  };
  const { firstname, lastname } = p;
  console.log(firstname);
  
  let { firstname: n, lastname: ln, address: { state: s, city: c } } = p;
  console.log(ln);
  console.log(s);
  console.log(c);