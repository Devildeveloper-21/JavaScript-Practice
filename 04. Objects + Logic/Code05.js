// Find the key with the highest value.

let obj = {
    num1: 2,
    num2: 4,
    num3: 8,
    num4: 3,
    num5: 7,
    num6: 4,
  },
  temp = 0,      //Let   temp = Number.NEGATIVE_INFINITY in case of negetive values.
  highKey = 0;

for (let key in obj) {
  if (obj[key] > temp) {
    temp = obj[key];
    highKey = key;
  }
}

console.log(highKey + " : " + temp);
