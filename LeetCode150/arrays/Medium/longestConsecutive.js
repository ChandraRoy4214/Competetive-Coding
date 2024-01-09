var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let currLength = 0;

      while (numsSet.has(nums[i] + currLength)) {
        currLength += 1;

        if (currLength > longest) {
          longest = currLength;
        }
      }
    }
  }

  return longest;
};

let nums = [100, 4, 200, 1, 3, 2];

// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const result = longestConsecutive(nums);
console.log('result: ', result);

// 1. brute force approach --> n logn
//   nums = nums.sort((a, b) => a - b);
//   let longest = 1;
//   let curr = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] - nums[i] === 1) {
//       curr += 1;

//       if (curr > longest) {
//         longest = curr;
//       }
//     } else if (nums[i + 1] - nums[i] === 0) {
//       continue;
//     } else {
//       curr = 1;
//     }
//   }

//   return longest;
