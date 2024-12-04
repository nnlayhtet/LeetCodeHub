/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i =0; i<nums.length; i++) {
        let current = nums[i]
        let pairIndex = nums.indexOf(target-current,i+1)
        if (pairIndex !== -1) return [i,pairIndex]
    }
    return []
};