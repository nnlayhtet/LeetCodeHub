/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let arr = [...flowerbed];
  let count = 0;
  let prev, curr, next;
  for (let i = 0; i < arr.length; i++) {
    prev = arr[i - 1];
    curr = arr[i];
    next = arr[i + 1];
    if (
      (prev === 0 || prev === undefined) &&
      curr === 0 &&
      (next === 0 || next === undefined)
    ) {
      arr[i] = 1;
      count++;
    }
  }
  return count >= n;
};