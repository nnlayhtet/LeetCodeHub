/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let upperLimit = nums.length - 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(i + 1) === -1) result.push(i + 1);
  }
  return result;
};