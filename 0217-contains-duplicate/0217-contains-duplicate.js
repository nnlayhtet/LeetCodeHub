/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    } else {
      map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
  }
  return false;
};