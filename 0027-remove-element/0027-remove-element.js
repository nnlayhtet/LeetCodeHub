/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] !== val) {
      i++;
    } else if (nums[j] !== val) {
      //swap, increment i, decrement j
      nums[i] = nums[j];
      nums[j] = val;
      i++;
      j--;
    } else if (nums[j] === val) {
      //no swap, decrement j
      j--;
    }
  }
  count = nums.indexOf(val)
  if(count === -1) count = nums.length
  return count;
};