/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let sortedNums = nums.sort((a,b)=>a-b)
    let tempCount = 1
    let longestCount = 0
    for (let i=0 ; i<nums.length ; i++){
        if (sortedNums[i+1] === sortedNums[i] + 1){
            tempCount++
        }
        else if (sortedNums[i+1] === sortedNums[i]) continue
        else {
            if(longestCount < tempCount) {
            longestCount = tempCount
            }
            tempCount = 1
        }
    }
    return longestCount
};