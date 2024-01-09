var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

let nums = [2, 3, 1, 1, 4];

const result = canJump(nums);
