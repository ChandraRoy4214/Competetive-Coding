// didint solve it..

let s = 'A man a  plan a canal Panama';

var isPalindrome = function (s) {
  if (s.length === 1) return true;
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  console.log(s);

  while (left <= right) {
    while (!isAlphanumeric(s[left])) {
      left++;
    }
    while (!isAlphanumeric(s[right])) {
      right--;
    }

    console.log(s[left], s[right]);

    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const isAlphanumeric = (c) => {
  let alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
  return alphanumeric.includes(c);
};

const result = isPalindrome(s);

console.log('result: ', result);
