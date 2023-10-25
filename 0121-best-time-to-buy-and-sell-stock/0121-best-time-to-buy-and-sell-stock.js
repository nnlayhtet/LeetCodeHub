/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let difference;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > minPrice) continue;
    for (let j = i + 1; j < prices.length; j++) {
      difference = prices[j] - prices[i];
      if (difference > maxProfit) maxProfit = difference;
    }
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  return maxProfit;
};