let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// this outputs increasing order array

function removeDuplicates() {
  let lastNonDecIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[lastNonDecIndex] = nums[i];

      lastNonDecIndex++;
    }
  }

  for (let i = lastNonDecIndex; i < nums.length; i++) {
    nums[i] = '_';
  }

  return { nums, lastNonDecIndex };
}

let output = removeDuplicates(nums);

console.log(output);
