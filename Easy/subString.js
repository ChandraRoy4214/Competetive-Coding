let haystack = 'sadbutsad',
  needle = 'sad';

(haystack = 'leetcode'), (needle = 'leeto');

var strStr = function (haystack, needle) {
  let firstOccurence = haystack.indexOf(needle);

  return firstOccurence >= 0 ? firstOccurence : 0;
};

const result = strStr(haystack, needle);

console.log('result: ', result);
