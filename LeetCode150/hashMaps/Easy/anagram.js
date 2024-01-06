let s = 'anagram',
  t = 'nagraam';

// (s = 'rat'), (t = 'car');

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]] > 0) {
      sObj[s[i]]++;
    } else {
      sObj[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tObj[t[i]] > 0) {
      tObj[t[i]]++;
    } else {
      tObj[t[i]] = 1;
    }
  }

  let sKeys = Object.keys(sObj);

  for (let i = 0; i < sKeys.length; i++) {
    if (sObj[sKeys[i]] !== tObj[sKeys[i]]) {
      return false;
    }
  }

  console.log(sObj, tObj);

  return true;
};

const result = isAnagram(s, t);

console.log('result: ', result);
