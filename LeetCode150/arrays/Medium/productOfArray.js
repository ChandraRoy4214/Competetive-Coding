var productExceptSelf = function (nums) {
  let res = Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = nums[i] * prefix;
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix = nums[i] * postfix;
  }

  return res;
};

let nums = [1, 2, 3, 4];

const result = productExceptSelf(nums);

console.log('result:', result);
