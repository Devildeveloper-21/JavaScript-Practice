//  Find the largest number in an array.

let Arr = [123, 1341, 435235, 55, 5, 8677587],
  temp = Arr[0];

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] >= temp) {
    temp = Arr[i];
  }
}
console.log(temp);
