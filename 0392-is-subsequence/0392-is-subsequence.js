/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0;
  let j = 0;
  while(j < t.length + 1){
    if(i === s.length){
      return true
    }
    if(s[i] === t[j]){
      i++;
      j++;
    } else {
      j++;
    }

  }
  return false
};