//  Reverse an array.

let Arr = [1, 2, 3, 4, 5, 6],
  reversed = [];

for (let i = Arr.length - 1; i >= 0; i--) {
  reversed.push(Arr[i]);
  console.log(Arr[i]);
  console.log(reversed[i]);
}
console.log(reversed);
