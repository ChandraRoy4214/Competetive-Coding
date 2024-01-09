var isSubsequence = function (s, t) {
  let i = 0;

  for (let j = 0; j < t.length; j++) {
    console.log(s[i], t[j]);

    if (s[i] === t[j]) {
      i++;
    }
  }

  console.log(i);

  return i === s.length;
};

console;

let s = 'axc',
  t = 'ahbgdc';

const result = isSubsequence(s, t);
console.log('result: ', result);
