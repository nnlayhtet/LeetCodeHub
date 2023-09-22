/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(word, words) {
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
    
  let count = 0
  let map = {}
  for(let word of words){
    map[word] ? map[word]+=1 : map[word]=1
  }
  for(let key in map){
    if(isSubsequence(key,word)) count+=map[key]
  }
  return count
};