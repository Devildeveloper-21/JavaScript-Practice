//  Reverse a string.

let str = "Hello",
  reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
