//  Count how many even numbers are in an array.

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  temp,
  evenNum = 0;

for (let i = 0; i < Arr.length; i++) {
  temp = Arr[i];
  if (temp % 2 == 0) {
    evenNum++;
  }
}
console.log(evenNum);
