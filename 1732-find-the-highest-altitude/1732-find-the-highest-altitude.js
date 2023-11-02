/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitudes = [0];
  for (let i = 0; i < gain.length; i++) {
    altitudes.push(altitudes[i] + gain[i]);
  }
  return Math.max(...altitudes);
};