/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sArray = s.split("");
  let tArray = t.split("");
  let sIndex = sArray.indexOf("#");
  let tIndex = tArray.indexOf("#");
  while (sIndex !== -1) {
    if (sIndex === 0) sArray.splice(0, 1);
    else sArray.splice(sIndex - 1, 2);
    sIndex = sArray.indexOf("#");
  }
  while (tIndex !== -1) {
    if (tIndex === 0) tArray.splice(0, 1);
    else tArray.splice(tIndex - 1, 2);
    tIndex = tArray.indexOf("#");
  }
  return sArray.join("") === tArray.join("");
};