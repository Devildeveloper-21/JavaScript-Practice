// Check if a number is a palindrome (121 → yes).

let num = Number(prompt("Enter Number :")),
  rem,
  result = 0;
const actualNum = num;

while (num != 0) {
  rem = num % 10;
  result = result * 10 + rem;
  num = Math.floor(num / 10);
}

if (actualNum == result) {
  alert("Number is Palindrome");
} else {
  alert("Number is not Palindrome");
}
