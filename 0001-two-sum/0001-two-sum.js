/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let foundIdx;
    let difference;
    for(let i = 0; i < nums.length; i++){
        difference = target - nums[i]
        foundIdx = nums.indexOf(difference, i+1)
        if(foundIdx !== -1) return [i, foundIdx] 
    }
};
// var twoSum = function(nums, target) {
// 	let map = {};
	
// 	for(let i = 0; i < nums.length; i++) {
// 		const n = nums[i];
// 		if(map[target - n] !== undefined) {
// 			return [map[target - n], i];
// 		}
// 		map[n] = i;
// 	}
// 	return [];
// }