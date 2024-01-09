let numbers = [-1, 0];
let target = -1;

var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let currSum = numbers[l] + numbers[r];

    if (currSum === target) {
      return [l + 1, r + 1];
    } else if (currSum > target) {
      r--;
    } else {
      l++;
    }
  }
};

const result = twoSum(numbers, target);
console.log('result: ', result);
