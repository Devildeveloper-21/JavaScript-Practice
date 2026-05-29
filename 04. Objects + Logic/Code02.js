//  Count how many properties an object has.

let counter = 0,
  obj = {
    name: "Harsh",
    age: 20,
    city: "Sangli",
    state: "Maharashtra",
  };

for (const i in obj) {
  counter++;
}

console.log(`Object has : ${counter} properties`);

//Better version.

console.log(Object.keys(obj).length);
