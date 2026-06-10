//  Build a password generator.
const copybtn = document.getElementById("copybtn");
const passwordBox = document.getElementById("passwordBox");
const passlengthBar = document.getElementById("passlengthBar");

let upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowerChar = "qwertyuiopasdfghjklzxcvbnm",
  numbers = "1234567890",
  symbols = "!@#$&*";

let passLen,
  selectedType = "";
let password = "";
passlengthBar.value = 0;
passlengthBar.addEventListener("change", function (e) {
  passLen = Math.floor(passlengthBar.value / 5);
  console.log(passLen);

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
  passwordBox.innerHTML = password;
  password = "";
});
