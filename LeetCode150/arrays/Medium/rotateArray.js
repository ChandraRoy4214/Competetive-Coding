let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

const reverseArray = (nums, l, r) => {
  while (l < r) {
    let temp = nums[l];

    nums[l] = nums[r];
    nums[r] = temp;

    l++;
    r--;
  }

  return nums;
};

var rotate = function (nums, k) {
  k = k % nums.length;

  let l = 0;
  let r = nums.length - 1;
  reverseArray(nums, l, r);

  l = 0;
  r = k - 1;

  reverseArray(nums, l, r);

  l = k;
  r = nums.length - 1;
  reverseArray(nums, l, r);

  return nums;
};

const result = rotate(nums, k);

console.log('result: ', result);

// 1. brute force
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
//   }
