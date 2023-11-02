/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let piIdx = 0;
  let leftValuesSum = 0;
  let rightValuesSum = 0;
  for (let i = 1; i < nums.length; i++) {
    rightValuesSum += nums[i];
  }
  while (piIdx >= 0 && piIdx < nums.length) {
    if (leftValuesSum === rightValuesSum) break;
    else {
      leftValuesSum += nums[piIdx];
      rightValuesSum -= nums[piIdx + 1];
      piIdx++;
    }
  }

  return piIdx === nums.length ? -1 : piIdx;
};