//  Build a password generator.

let upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowerChar = "qwertyuiopasdfghjklzxcvbnm",
  numbers = "1234567890",
  symbols = "!@#$&*";

let passLen = 10,
  selectedType = "";
let password = "";

for (let i = 0; i < passLen; i++) {
  selectedType = Math.floor(Math.random() * 4);
  if (selectedType == 0) {
    password += upperChar[Math.floor(Math.random() * upperChar.length)];
  } else if (selectedType == 1) {
    password += lowerChar[Math.floor(Math.random() * lowerChar.length)];
  } else if (selectedType == 2) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  } else if (selectedType == 3) {
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }
}
console.log(password);
password = "";
