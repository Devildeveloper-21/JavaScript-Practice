let expression = "12+3434.6-8.6";

function CheckTheDecimal() {
  let getNum = "";

  let symbols = "+-*/",
    lastOperatorIndex = -1,
    currentOperatorIndex = 0;

  for (let i = 0; i < symbols.length; i++) {
    currentOperatorIndex = expression.lastIndexOf(symbols[i]);

    if (currentOperatorIndex > lastOperatorIndex) {
      lastOperatorIndex = currentOperatorIndex;
    }
  }

  getNum = expression.slice(lastOperatorIndex + 1);

  if (getNum.includes(".")) {
    console.log("Dont Allow To Add Decimal");
  } else {
    console.log("Allow To Add Decimal");
  }

  console.log(getNum);
}

CheckTheDecimal();

