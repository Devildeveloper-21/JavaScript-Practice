//  Convert object to array.

let obj = {
    name: "Harsh",
    age: "20",
    city: "sangli",
  },
  arr = [],
  valArr = [],
  keyValArr = [];

arr = Object.keys(obj);
console.log(arr);
arr = Object.values(obj);
console.log(arr);
arr = Object.entries(obj);
console.log(arr);

// Maually converting to array.
arr = [];
for (let key in obj) {
  arr.push(key);
  valArr.push(obj[key]);
  keyValArr.push([key, obj[key]]); 
}
console.log(arr);
console.log(valArr);
console.log(keyValArr);
