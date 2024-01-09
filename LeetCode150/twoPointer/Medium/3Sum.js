var threeSum = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      console.log(i, l, r);

      let currSum = nums[i] + nums[l] + nums[r];

      if (currSum > 0) {
        r -= 1;
      } else if (currSum < 0) {
        l += 1;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;

        while (nums[r] === nums[r - 1] && l < r) {
          //   console.log(
          //     'why are you looping again and again',
          //     l,
          //     nums[l - 1],
          //     nums[l]
          //   );

          r -= 1;
        }
      }
    }
  }

  return res;
};

//   if (currSum === 0) {
//     res.push([nums[i], nums[l], nums[r]]);

//     i++;
//     l = i + 1;
//     r = nums.length - 1;
//   } else {
//     if (currSum < 0) {
//       l++;
//     } else {
//       r--;
//     }
//   }

let nums = [-1, 0, 1, 2, -1, -4];

// nums = [0, 0, 0, 0];

const result = threeSum(nums);

console.log('result: ', result);
