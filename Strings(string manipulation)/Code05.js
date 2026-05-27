//  Capitalize first letter of each word.

let str = "my name is harsh",
  temp = "";

for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] === " ") {
    temp += str[i].toUpperCase();
  } else {
    temp += str[i];
  }
}
console.log(temp);
