let paranthesis = '(){}[]';

var isValid = function (s) {
  let obj = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack?.length && obj[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    console.log('stack: ', i, stack);
  }

  return stack.length ? false : true;
};

let s = '[[]]';

const result = isValid(s);

console.log('result: ', result);
