//  Loop through nested object.

let obj = {
  name: "Harsh",
  address: {
    city: "Sangli",
    state: "Maharashtra",
    country: "India",
  },
  email: "harsh@gmail.com",
};

for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let subkey in obj[key]) {
      console.log(subkey + " : " + obj[key][subkey]);
    }
  } else {
    console.log(key + " : " + obj[key]);
  }
}
