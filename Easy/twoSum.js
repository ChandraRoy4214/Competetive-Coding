// two sum -- leet code easy 1

let nums = [3, 3],
  target = 6;

function twoSum(arr, tar) {
  let previouslySeenValues = {};

  for (let i = 0; i < arr.length; i++) {
    let neededValue = tar - arr[i];

    let index2 = previouslySeenValues[neededValue];

    console.log('i; ', i);

    if (index2 != null) {
      return [index2, i];
    } else {
      previouslySeenValues[arr[i]] = i;
    }
  }
}

const result = twoSum(nums, target);

console.log(result);
