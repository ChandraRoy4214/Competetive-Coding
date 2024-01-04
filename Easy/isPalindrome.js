var isPalindrome = function (x) {
  x = x.toString();

  console.log(x.length);

  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] === x[x.length - i - 1]) {
    } else {
      return false;
    }
  }
  return true;
};

let x = 1234567654321;

const result = isPalindrome(x);

console.log('result: ', result);
