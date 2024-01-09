// didnt solve it.. mathy

var isHappy = function (n) {
  if (!n) return false;

  let seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);

    n = sumOfSquares(n);

    if (n === 1) return true;
  }

  return false;
};

const sumOfSquares = (n) => {
  let output = 0;

  while (n) {
    let digit = n % 10;
    digit = digit ** 2;
    output += digit;
    n = Math.floor(n / 10);
  }

  return output;
};

let n = 19;

const result = isHappy(n);

console.log('result: ', result);
