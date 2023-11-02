/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let nums1result = [];
  let nums2result = [];
  let num;
  for (let i = 0; i < nums1.length; i++) {
    num = nums1[i];
    if (nums2.indexOf(num) === -1 && nums1result.indexOf(num) === -1)
      nums1result.push(num);
  }
  for (let j = 0; j < nums2.length; j++) {
    num = nums2[j];
    if (nums1.indexOf(num) === -1 && nums2result.indexOf(num) === -1)
      nums2result.push(num);
  }
  return [nums1result, nums2result];
};