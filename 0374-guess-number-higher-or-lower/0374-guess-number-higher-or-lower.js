/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let check = guess(n);
  let left = 1;
  let right = 2 ** 31 - 1;
  while (check !== 0) {
    if (check === -1) {
      right = n;
      n = Math.floor((right + left) / 2);
      check = guess(n);
    } else if (check === 1) {
      left = n;
      n = Math.floor((right + left) / 2);
      check = guess(n);
    }
  }
  return n;
};