var minSubArrayLen = function (target, nums) {
  let l = 0;
  let total = 0;
  let res = nums.length + 1;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];

    while (total >= target) {
      res = Math.min(res, r - l + 1);
      total -= nums[l];

      l += 1;
    }
  }

  return res === nums.length + 1 ? 0 : res;
};

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

const result = minSubArrayLen(target, nums);

console.log('result: ', result);

// brute force, working but time limit exceeding in leetcode.

//   let windowSize = 0;
//   let windowStart = 0;
//   let windowEnd = 0;

// [2, 3, 1, 2, 4, 3];

//   while (windowEnd < nums.length) {
//     let currSum = 0;
//     let currWindow = windowEnd - windowStart + 1;

//     // sum of elements in the window
//     for (let i = windowStart; i <= windowEnd; i++) {
//       currSum += nums[i];
//     }

//     if (currSum >= target) {
//       if (windowSize > currWindow) {
//         windowSize = currWindow;
//       } else if (windowSize === 0) {
//         windowSize = currWindow;
//       }

//       if (windowSize === 1) return windowSize;

//       windowStart++;
//     } else {
//       windowEnd++;
//     }

//     console.log('windowStart, windowEnd: ', windowStart, windowEnd);
//   }

//   return windowSize;
