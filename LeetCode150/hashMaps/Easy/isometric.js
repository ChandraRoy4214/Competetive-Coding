// start looping on string and keep building the two objects until if you find the wrong match, otherwise if every letter is matched properly then those two are isometric strings.

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  let mapST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if ((mapST[c1] && mapST[c1] !== c2) || (mapTS[c2] && mapTS[c2] != c1)) {
      return false;
    } else {
      mapST[c1] = c2;
      mapTS[c2] = c1;
      console.log('mapST: ', mapST, 'mapTS: ', mapTS);
    }
  }

  console.log('mapST: ', mapST, 'mapTS: ', mapTS);

  return true;
};

let s = 'agg',
  t = 'add';

const result = isIsomorphic(s, t);

console.log('result', result);
