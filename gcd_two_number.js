const gcdTwoNumber = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y !== 0) {
    const remainder = x % y;

    x = y;
    y = remainder;
  }
  return x;
};
const gcdThreeNumber = (a, b, c) => {
  const gcdAB = gcdTwoNumber(a, b);
  return gcdTwoNumber(gcdAB, c);
};

const num1 = 60;

const num2 = 90;

const num3 = 120;

console.log(
  ` GCD of ${num1} , ${num2} and ${num3} of ${gcdThreeNumber(num1, num2, num3)}`
);
