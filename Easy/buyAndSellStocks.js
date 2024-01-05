let prices = [7, 6, 4, 3, 1];
prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let MAX_PROFIT = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let profit = prices[r] - prices[l];
      MAX_PROFIT = profit > MAX_PROFIT ? profit : MAX_PROFIT;
    } else {
      l = r;
    }

    r++;
  }
  console.log('MAX_PROFIT: ', MAX_PROFIT);

  return MAX_PROFIT;
};

// second approach;

//

// for (let i = 0; i < prices.length; i++) {
//   if (prices[r] - prices[l] > MAX_PROFIT) {
//     MAX_PROFIT = prices[r] - prices[l];
//   }

//   if (prices[l] > prices[r]) {
//     l = r;
//   }

//   r++;
// }

// third approach is basically nested for loop

let result = maxProfit(prices);
