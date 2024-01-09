// two sum -- leet code easy 1

let nums = [3, 3],
  target = 6;

function twoSum(arr, tar) {
  let seenValues = {};

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    let neededValue = tar - currVal;

    console.log('i; ', i);

    if (seenValues[neededValue]) {
      return [i, seenValues[neededValue]];
    } else {
      seenValues[arr[i]] = i;
    }
  }
}

const result = twoSum(nums, target);

console.log(result);
