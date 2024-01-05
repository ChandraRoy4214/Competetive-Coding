let digits = [1, 2, 3];

// digits = [4, 3, 2, 1];

// digits = [
//   5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2,
//   5, 8, 9,
// ];
digits = [9, 9, 9];

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;

      return digits;
    }
  }

  // it wont come here if the all the elements are not 9s
  digits.unshift(1);

  return digits;
};

//   if (digits[digits.length - 1] < 9) {
//     let integer = digits.pop();

//     digits.push(integer + 1);
//     console.log(integer);
//   } else {
//     let string = digits.join('');
//     let integer = JSON.stringify(string) + 1;

//     digits = JSON.stringify(integer).split('');
//   }

//   console.log('digits: ', digits);

//   return digits;

//   let integer = '';
//   let finalArray = [];
//   for (let i = 0; i < digits.length; i++) {
//     integer = integer + JSON.stringify(digits[i]);
//   }
//   integer = JSON.parse(integer);
//   result = integer + 1;
//   console.log('result: ', result);
//   result = JSON.stringify(result);
//   for (let j = 0; j < result.length; j++) {
//     finalArray.push(result[j]);
//   }
//   console.log(finalArray);
//   return finalArray;

plusOne(digits);
