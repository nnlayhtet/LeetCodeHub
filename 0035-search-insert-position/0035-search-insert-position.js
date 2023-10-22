/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (target < nums[left]) return 0;
  if (target > nums[right]) return nums.length;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      left = mid;
      mid = Math.floor((left + right) / 2);
      if (mid === left) return mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
      mid = Math.floor((left + right) / 2);
      if (mid === right) return mid + 1;
    }
  }
  return mid;
};