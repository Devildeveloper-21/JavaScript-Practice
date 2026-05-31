//  Create a simple calculator object.

let calculator = {
  add(...nums) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      temp += nums[i];
    }
    return temp;
  },
  sub(...nums) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      temp -= nums[i];
    }
    return temp;
  },
  mul(...nums) {
    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
      temp *= nums[i];
    }
    return temp;
  },
  div(...nums) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === 0) return "Cannot divide by zero";
      temp /= nums[i];
    }
    return temp;
  },
};

console.log(calculator.add(10, 20, 30, 40));

console.log(calculator.sub(10, 20));
console.log(calculator.mul(10, 20));
console.log(calculator.div(10, 0));
