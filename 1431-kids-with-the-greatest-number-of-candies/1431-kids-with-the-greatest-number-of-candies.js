/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let resultArray = [];
  let max = Math.max(...candies);
  for (let candy of candies) {
    resultArray.push(candy + extraCandies >= max ? true : false);
  }
  return resultArray;
};