// Find the largest of 3 numbers.

let num1 = Number(prompt("Enter Num1;"));
let num2 = Number(prompt("Enter Num2;"));
let num3 = Number(prompt("Enter Num3;"));

console.log("Num1 :" + num1);
console.log("Num2 :" + num2);
console.log("Num3 :" + num3);

if (num1 > num2 && num1 > num3) {
  console.log("Num1 is largest");
} else if (num2 > num1 && num2 > num3) {
  console.log("Num2 is largest");
} else if (num1 == num2 && num2 == num3) {
  console.log("All numbers are equal");
} else {
  console.log("Num3 is largest");
}
