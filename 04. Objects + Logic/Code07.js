//  Deep copy vs shallow copy (implement shallow copy).

let obj = {
    name: "Harsh",
    address: { city: "Sangli" },
  },
  ShallowCopy,
  DeepCopy;

ShallowCopy = { ...obj };
DeepCopy = structuredClone(obj);

DeepCopy.address.city = "Mumbai";
console.log(obj.address.city);

ShallowCopy.address.city = "Pune";
console.log(obj.address.city);
