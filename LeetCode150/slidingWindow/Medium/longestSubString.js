var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let strSet = new Set();

  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    while (strSet.has(s[r])) {
      strSet.delete(s[l]);
      l = l + 1;
    }

    strSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }

  return res;
};
s = 'pwwkew';

const result = lengthOfLongestSubstring(s);

console.log('result: ', result);
