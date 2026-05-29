//  Check if a number is prime.

let num = prompt("Check Number is prime or not:"),
  root = Math.floor(Math.sqrt(num)),
  i,
  isPrime = true;

if (isNaN(num)) {
  alert("Enter Valid Number.");
} else {
  for (i = 2; i <= root; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime == true) {
    alert("Number is Prime.");
  } else {
    alert("Number is not Prime.");
  }
}
