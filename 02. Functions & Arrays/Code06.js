//  Find the second largest number in an array.

let Arr = [-3,-5,0,-4,-9],
  secondLargest = Number.NEGATIVE_INFINITY,
  largest = Arr[0];

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] > largest) {
    secondLargest = largest;
    largest = Arr[i];
  } else if (Arr[i] < largest && Arr[i] > secondLargest) {
    secondLargest = Arr[i];
  }
}
console.log(largest);
console.log(secondLargest);
