/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let canBeJudge = new Set([]);
  let cannotBeJudge = new Set([]);

  for (let i=0; i<n; i++){
    canBeJudge.add(i+1)
  }
  for (let pair of trust) {
    cannotBeJudge.add(pair[0]);
  }
  for (const element of cannotBeJudge) {
    canBeJudge.delete(element);
  }
    let count =0
    let j = [...canBeJudge][0]
    for (let e of trust){
        if(e[1] === j) count++
    }
    
  return n-1===count? j : -1
};