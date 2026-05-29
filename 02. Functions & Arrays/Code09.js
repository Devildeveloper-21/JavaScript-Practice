//  Find common elements between two arrays.
let Arr1 = [1, 2, 3, 4, 5, 6, 6],
  Arr2 = [2, 9, 8, 0, 1, 10, 6, 6],
  common = [];

for (let i = 0; i < Arr1.length; i++) {
  for (let j = 0; j < Arr2.length; j++) {
    if (Arr1[i] == Arr2[j] && !common.includes(Arr1[i])) {
      common.push(Arr1[i]);
    }
  }
}
console.log(common);
