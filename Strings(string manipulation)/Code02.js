//  Check if a string is palindrome.

let str = "lol",
  reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
if (str === reversed) {
  console.log("String is Palindrome");
} else {
  console.log("String is not Palindrome");
}
