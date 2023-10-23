/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let strArr = s.split(" ");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].split("").reverse().join("");
  }
  return strArr.join(" ");
};