let romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(question) {
  let integer = 0;

  if (question.length < 1) return 'No roman roman';

  for (let i = 0; i < question.length; i++) {
    if (romanValues[question[i]] < romanValues[question[i + 1]]) {
      integer -= romanValues[question[i]];
    } else {
      integer += romanValues[question[i]];
    }
  }

  if (integer === 7) return 'THALA FOR A  REASON!';

  return integer;
}

const result = romanToInteger('CL');

console.log('result: ', result);
