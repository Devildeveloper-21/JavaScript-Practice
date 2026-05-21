//  Merge two arrays without duplicates.

let Arr1 = [1, 2, 3, 3, 1, 4, 2, 5],
  Arr2 = [6, 7, 4, 8, 9, 8, 0],
  merged = [];

//  *** using Two Loops ***

for (let i = 0; i < Arr1.length; i++) {
  if (!merged.includes(Arr1[i])) {
    merged.push(Arr1[i]);
  }
}
for (i = 0; i < Arr2.length; i++) {
  if (!merged.includes(Arr2[i])) {
    merged.push(Arr2[i]);
  }
}
console.log(merged);

//   *** Using single Loop ***

let Arr3 = [1, 2, 3, 3, 1, 4, 2, 5],
  Arr4 = [6, 7, 4, 8, 9, 8, 0],
  concatenated = [];
Arr3 = Arr3.concat(Arr4);

for (i = 0; i < Arr3.length; i++) {
    if (!concatenated.includes(Arr3[i])) {
        concatenated.push(Arr3[i]);
    }
}
console.log(concatenated);
