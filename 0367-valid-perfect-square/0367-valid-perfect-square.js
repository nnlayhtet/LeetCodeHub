/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let result = 1
  while(result*result <= num){
    if (result*result === num) return true
      result++
  }
  return false
};