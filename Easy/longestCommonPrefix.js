let strs = ['flower', 'flow', 'flight'];
strs = ['dog', 'racecar', 'car'];

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 0; i < strs.length - 1; i++) {
    for (let j = 0; j < strs[0].length; j++) {
      if (prefix[j] !== strs[i + 1][j]) {
        prefix = prefix.slice(0, j);
      }
    }
  }

  return prefix;
};

const result = longestCommonPrefix(strs);

console.log('red: ', result, typeof result);
