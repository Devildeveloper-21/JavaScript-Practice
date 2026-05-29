//  Rotate an array by k steps.

// Rotating the array toward right

let Arr = [1, 2, 3, 4, 5],
  k = 2;

while (k > 0) {
  Arr.unshift(Arr[Arr.length - 1]);
  Arr.pop();
  k--;
}

console.log(`Rotate Right :${Arr}`);

// Rotating the array toward right

Arr = [1, 2, 3, 4, 5];
k = 2;

while (k > 0) {
  Arr.push(Arr[0]);
  Arr.shift(Arr[0]);
  k--;
}
console.log(`Rotate Left :${Arr}`);
