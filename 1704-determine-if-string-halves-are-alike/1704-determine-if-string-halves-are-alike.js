/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = new Set(['a','e','i','o','u'])
  let aCount = 0
  let bCount = 0
  let a = s.slice(0,s.length/2)
  let b = s.slice(s.length/2)
  for(let char of a){
    if (vowels.has(char.toLowerCase())) aCount++
  }
  for(let char of b){
    if (vowels.has(char.toLowerCase())) bCount++
  }
  return aCount === bCount
};