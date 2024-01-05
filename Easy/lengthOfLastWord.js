let s = '   fly me   to   the moon  ';

var lengthOfLastWord = function (s) {
  let len = 0;

  s = s.trim();

  s = s.split(' ');

  return s[s.length - 1].length;

  //   for (let i = s.length - 1; i >= 0; i--) {
  //     console.log(s.trim().length, i, s[i]);

  //     if (s[i] == ' ') {
  //       return len;
  //     } else {
  //       len++;
  //     }
  //   }

  //   return len;
};

const result = lengthOfLastWord(s);

console.log('result: ', result);
