var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[right], height[left]);

    console.log('left, right: ', left, right);

    if (area > mostWater) {
      mostWater = area;
    }

    console.log(mostWater);

    if (height[right] < height[left]) {
      right--;
    } else if (height[right] > height[left]) {
      left++;
    } else {
      right--;
      left++;
    }
  }

  return mostWater;

  // 1. brute force approach
  //     let mostWater = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     for (let j = 0; j < height.length; j++) {
  //       let area = (j - i) * Math.min(height[j], height[i]);
  //       if (area > mostWater) {
  //         mostWater = area;
  //       }
  //     }
  //   }
  //   return mostWater;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);

console.log('result: ', result);
