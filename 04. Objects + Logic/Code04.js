// Merge two objects.

let obj1 = {
    name: "harsh",
    age: 20,
  },
  obj2 = {
    name: "Hari",
    city: "sangli",
  },
  merged = {};

for (let key in obj1) {
  merged[key] = obj1[key];
}
for (key in obj2) {
  if (!merged.hasOwnProperty(key)) {
    merged[key] = obj2[key];
  }
}

console.log(merged);

//Using spread operator.

merged = {};
merged = {
    ...obj1,
    ...obj2,
};

console.log(merged);

//While merging the objects using spread operator the second object values will override the values from first object.