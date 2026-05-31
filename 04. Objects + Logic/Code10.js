//  Sort object by values.

let marks = {
  english: 90,
  history: 50,
  maths: 80,
  hindi: 30,
  marathi: 60,
  science: 80,
};
let temp,
  tempArr = Object.entries(marks);

for (let i = 0; i < tempArr.length; i++) {
  for (let j = i + 1; j < tempArr.length; j++) {
    if (tempArr[i][1] > tempArr[j][1]) {
      temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
  }
}
console.log(Object.fromEntries(tempArr));
