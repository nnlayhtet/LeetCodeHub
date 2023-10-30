/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let temp;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = 0;
        break;
      }
    }
  }
  return nums;
};