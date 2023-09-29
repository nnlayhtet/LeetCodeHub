/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let ascendingCount = 0
  let descendingCount = 0
  if(nums.length === 1) return true
    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] <= nums[i + 1]){
        ascendingCount++
      }
      if(ascendingCount === nums.length - 1){
        return true
      }
    }
    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] >= nums[i + 1]){
        descendingCount++
      }
      if(descendingCount === nums.length - 1){
        return true
      }
    }
    return false
};