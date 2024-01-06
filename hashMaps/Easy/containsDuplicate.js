var containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }

  return false;
};

let nums = [1, 2, 1, 3]; // true

const result = containsDuplicate(nums);

console.log('result: ', result);
