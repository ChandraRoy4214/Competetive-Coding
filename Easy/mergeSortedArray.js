let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

var merge = function (nums1, m, nums2, n) {
  let replacingIndex = m + n; // nums1 length

  while (m > 0 && n > 0) {
    if (nums2[n - 1] > nums1[m - 1]) {
      nums1[replacingIndex - 1] = nums2[n - 1];
      n--;
    } else {
      nums1[replacingIndex - 1] = nums1[m - 1];
      m--;
    }

    replacingIndex--;
  }

  // fill up remaining;
  while (n > 0) {
    nums1[replacingIndex - 1] = nums2[n - 1];
    replacingIndex--;
    n--;
  }

  return nums1;
};

const result = merge(nums1, m, nums2, n);

console.log('result: ', result);
