// Reverse a number (e.g., 123 → 321).

let num = Number(prompt("Enter the number :"));
let result =0 , lastDigit;

while(num !== 0){
lastDigit = num % 10;
result = result * 10 + lastDigit;
num = Math.floor(num / 10);
}
alert(result);
