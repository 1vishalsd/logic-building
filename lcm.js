// lcm(a,b) = |a*b|/gcd(a,b)

const gcdTwoNumber = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};
const lcmTwoNmber = (a, b) => {
  return Math.abs(a * b) / gcdTwoNumber(a, b);
};

let num1 = 60;
let num2 = 50;
let result = lcmTwoNmber(num1, num2);
console.log(`LCM of ${num1} and ${num2} is ${result}`);
