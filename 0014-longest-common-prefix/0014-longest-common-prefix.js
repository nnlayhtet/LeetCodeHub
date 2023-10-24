/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let lcp = "";
  let char;
  let isEnded = false;
  for (let i = 0; i < strs[0].length; i++) {
    char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        isEnded = true;
        break;
      }
      if (j === strs.length - 1) lcp = lcp.concat(char);
    }
    if (isEnded) break;
  }
  return lcp;
};