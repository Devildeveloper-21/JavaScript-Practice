//  Write a function to find the sum of an array.

let numArr = [1, 2, 3, 1, 3],
  temp = 0;

function sumOfArr() {
  for (let i = 0; i < numArr.length; i++) {
    temp += numArr[i];
}
console.log(temp);
}

sumOfArr();
