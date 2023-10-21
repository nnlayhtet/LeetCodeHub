/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U'])
  strArr = s.split("");
  let i = 0;
  let j = strArr.length - 1;
  let temp;
  while (i < j) {
    if (
      vowelSet.has(strArr[i])
    ) {
      temp = strArr[i];
      if (
        vowelSet.has(strArr[j])
      ) {
        strArr[i] = strArr[j];
        strArr[j] = temp;
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return strArr.join("")
};