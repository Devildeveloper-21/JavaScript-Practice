// Print multiplication table of a number.

let num = prompt("Enter number of multiplication table : ");
let mulNum = Number(num);

if (isNaN(mulNum) || mulNum === 0  ) {
  alert("Enter the valid number");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${mulNum} X ${i} = ${mulNum * i}`);
  }
}
