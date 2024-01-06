var wordPattern = function (pattern, s) {
  let arr = s.split(' ');

  if (pattern.length != arr.length) return false;

  let mapPS = {};
  let mapSP = {};

  mapSP.constructor = null;

  for (let i = 0; i < pattern.length; i++) {
    if (mapPS[pattern[i]] && mapPS[pattern[i]] != arr[i]) {
      return false;
    } else if (mapSP[arr[i]] && mapSP[arr[i]] != pattern[i]) {
      console.log('mapSP: ', mapSP);

      console.log('arr[i]: ', arr[i]);

      console.log('mapSP[arr[i]]: ', mapSP[arr[i]]);
      console.log('mapPS[arr[i]]: ', mapPS.constructor);

      return 'fuck you';
    } else {
      mapPS[pattern[i]] = arr[i];
      mapSP[arr[i]] = pattern[i];
    }
  }

  return true;
};

let pattern = 'abba',
  s = 'dog constructor constructor dog';

const result = wordPattern(pattern, s);
console.log('result: ', result);
