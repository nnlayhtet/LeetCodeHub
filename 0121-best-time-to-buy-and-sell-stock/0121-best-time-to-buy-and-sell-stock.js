/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let difference;
  let minPrice = prices[0];
  let maxPrice = Math.max(...prices);

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > minPrice) continue;
    for (let j = i + 1; j < prices.length; j++) {
      difference = prices[j] - prices[i];
      if (difference > max) max = difference;
      if (prices[j] === maxPrice) break;
    }
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  return max;
};