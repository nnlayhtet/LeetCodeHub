/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let counter = {}
    // for (let i=0; i<nums.length; i++){
    //     counter[nums[i]] = (counter[nums[i]] || 0) + 1
    //     if (counter[nums[i]] > nums.length/2) return nums[i]
    // }
    let sortedArray = nums.sort()
    return sortedArray[Math.floor(sortedArray.length/2)]    
    
};