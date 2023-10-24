/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newString = "";
  let letterSet = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ]);
  for (let i = 0; i < s.length; i++) {
    if (letterSet.has(s[i].toLowerCase())) {
      newString = newString.concat(s[i].toLowerCase());
    }
  }

  let i = 0;
  let j = newString.length - 1;
  while (i < j) {
    if (newString[i] !== newString[j]) return false;
    i++;
    j--;
  }
  return true;
};