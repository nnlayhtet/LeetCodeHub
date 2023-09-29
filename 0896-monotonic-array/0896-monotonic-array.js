/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let ascendingCount = 0
  let descendingCount = 0
  if(nums.length === 1) return true
    for(let i = 0, j = 1; i < nums.length - 1; i++, j++){
      if(nums[i] <= nums[j]){
        ascendingCount++
      }
      if(ascendingCount === nums.length - 1){
        return true
      }
    }
    for(let i = 0, j = 1; i < nums.length - 1; i++, j++){
      if(nums[i] >= nums[j]){
        descendingCount++
      }
      if(descendingCount === nums.length - 1){
        return true
      }
    }
    return false
};