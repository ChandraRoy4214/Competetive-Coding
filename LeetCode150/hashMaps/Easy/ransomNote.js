let ransomNote = 'aa',
  magazine = 'abbbb';

var canConstruct = function (ransomNote, magazine) {
  let magObj = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magObj[magazine[i]]) {
      magObj[magazine[i]]++;
    } else {
      magObj[magazine[i]] = 1;
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    if (magObj[ransomNote[j]] > 0) {
      magObj[ransomNote[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

const result = canConstruct(ransomNote, magazine);

console.log('result: ', result);
