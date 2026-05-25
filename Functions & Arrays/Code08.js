//  Sort an array without using .sort().

let Arr = [33, 56, 22, 99, 222, 4, 2, 3, 444],
  temp;

// with J=0 which check every element from starting.

for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length; j++) {
    if (Arr[i] < Arr[j]) {
      temp = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = temp;
    }
  }
}
console.log(`Ascending Order: ${Arr}`);

Arr = [33, 56, 22, 99, 222, 4, 2, 3, 444];

for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length; j++) {
    if (Arr[i] > Arr[j]) {
      temp = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = temp;
    }
  }
}
console.log(`Descending Order: ${Arr}`);

//
//
// with J=i+1 which check unsorted array wihout checking every element.

Arr = [33, 56, 22, 99, 222, 4, 2, 3, 444];

for (let i = 0; i < Arr.length; i++) {
  for (let j = i + 1; j < Arr.length; j++) {
    if (Arr[i] > Arr[j]) {
      temp = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = temp;
    }
  }
}
console.log(`Ascending Order: ${Arr}`);

Arr = [33, 56, 22, 99, 222, 4, 2, 3, 444];

for (let i = 0; i < Arr.length; i++) {
  for (let j = i + 1; j < Arr.length; j++) {
    if (Arr[i] < Arr[j]) {
      temp = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = temp;
    }
  }
}
console.log(`Descending Order: ${Arr}`);
