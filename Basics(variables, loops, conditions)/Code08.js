// Count digits in a number.

let num = Number(prompt("Enter the number :"));
let numLen = 0;

if (isNaN(num)) {
  alert("Enter valid number");
} else if (num == 0) {
  alert("Length of number is 1");
} else {
  while (num != 0) {
    num = Math.floor(num / 10);
    numLen++;
  }
  alert(`Lenght of number is ${numLen}`);
}
