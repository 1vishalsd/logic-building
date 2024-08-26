const gcdTwoNumbers = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y !== 0) {
    const remainder = x % y;
    x = y;
    y = remainder;
  }
  return x;
};

const gcdThreeNumbers = (a, b, c) => {
  // Find GCD of first two numbers
  const gcdAB = gcdTwoNumbers(a, b);

  // Find GCD of result with the third number
  return gcdTwoNumbers(gcdAB, c);
};

const n1 = 45;
const n2 = 56;
const n3 = 90;

console.log(`GCD of ${n1}, ${n2}, and ${n3} is ${gcdThreeNumbers(n1, n2, n3)}`);
