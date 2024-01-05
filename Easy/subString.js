let haystack = 'sadbutsad',
  needle = 'sad';

(haystack = 'leetcode'), (needle = 'leeto');

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle) || -1;
};

const result = strStr(haystack, needle);

console.log('result: ', result);
