var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  // [1, 3, 5, 6] == 2

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);

    console.log(l, mid, r);

    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return l;
};

let nums = [1, 3, 5, 6];
let target = 2;

const result = searchInsert(nums, target);

console.log('result: ', result);
