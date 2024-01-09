let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

var removeElement = function (nums, val) {
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
      nums[l] = nums[i];
      l++;
    }
  }

  for (let j = l; j < nums.length; j++) {
    nums[j] = '_';
  }

  console.log(nums);

  return l;
};

const result = removeElement(nums, val);

console.log('result: ', result);
