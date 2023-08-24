/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let maxSum = 0
    for ( let i=0 ; i<nums.length-1 ; i++ ){
        for ( let j=i+1 ; j<nums.length ; j++){
            let sum = nums[i] + nums[j]
            let leftMax = Math.max (...[...nums[i]+''].map(n=>+n))
            let rightMax = Math.max(...[...nums[j]+''].map(n=>+n))
            if (leftMax===rightMax && sum>maxSum){
                maxSum=sum
            }
            }
        }
    return maxSum || -1
}