var reverseWords = function (s) {
  if (s.length === 0) return '';

  const arr = s.split(' ');

  let string = '';

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '') {
      continue;
    }

    string += arr[i] + ' ';
  }

  return string.trim();
};

let s = '  hello world  ';
const result = reverseWords(s);
console.log('result: ', result);
