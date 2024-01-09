let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

var groupAnagrams = function (strs) {
  let obj = {};

  for (let i of strs) {
    let str = i.split('').sort().join('');

    if (obj[str]) {
      obj[str].push(i);
    } else {
      obj[str] = [i];
    }
  }

  return Object.values(obj);
};

const result = groupAnagrams(strs);

console.log('result: ', result);
