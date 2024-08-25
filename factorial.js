const factoraial = (n) => {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= 1;
  }
  return result;
};
console.log(factoraial(7));
