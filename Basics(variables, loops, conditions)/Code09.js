//  Sum of digits of a number (e.g., 123 → 6).

let temp = 0,
  num = Number(prompt("Enter the Number :")),
  result = 0;

if (isNaN(num)) {
  alert("Enter the valid number.");
} else {
  while (num != 0) {
    temp = num % 10;
    num = Math.floor(num / 10);
    result += temp;
  }
  alert(`Sum of Digit Is ${result}`);
}

