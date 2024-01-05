let x = 125;
// x = 9;

var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let low = 0;
  let high = x;
  let res = 0;

  while (low <= high) {
    let mid = Math.round((high + low) / 2);

    console.log('mid: ', mid);

    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      low = mid + 1;
      res = mid;
    } else {
      high = mid - 1;
    }
  }
  return res;
};

const result = mySqrt(x);

console.log('result: ', result);
