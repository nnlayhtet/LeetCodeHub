/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let temp = "";
  let x = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    temp = temp + str1[i];
    if (str1[i] !== str2[i]) break;
    if (str1.split(temp).join("") == false && str2.split(temp).join("") == false)
      x = temp;
  }
  return x;
};