/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let difference;
  let maxInArray = Math.max(...prices);
  let minInArray = Math.min(...prices);
  let maxPossibleDifference = maxInArray - minInArray;

  if (prices.indexOf(minInArray) < prices.indexOf(maxInArray)){
    return maxPossibleDifference;
  }

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      difference = prices[j] - prices[i];
      if (difference > max) max = difference;
    }
    if (max === maxPossibleDifference) break;
  }
  return max;
};