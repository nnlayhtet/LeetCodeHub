/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let rnArray = ransomNote.split("").sort().join("");
  let mArray = magazine.split("").sort().join("");
  let foundIndex = -1;
  for (let i = 0; i < rnArray.length; i++) {
    foundIndex = mArray.indexOf(rnArray[i], foundIndex + 1);
    if (foundIndex === -1) return false;
  }
  return true;
};