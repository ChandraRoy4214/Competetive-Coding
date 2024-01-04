nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
  let obj = {};
  let maxCount = 0;
  let result;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;

      if (obj[nums[i]] > maxCount) {
        maxCount = obj[nums[i]];
        result = nums[i];
      }
    } else {
      obj[nums[i]] = 1;
    }
  }

  return result;
};

majorityElement(nums);
