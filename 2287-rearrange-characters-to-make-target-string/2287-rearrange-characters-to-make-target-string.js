/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let min = Infinity
    let sMap = {}
    let targetMap = {}
    if (target.length > s.length) return 0
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        let targetChar = target[i]
        sMap[char] ? sMap[char]++ : sMap[char] = 1
        targetMap[targetChar] ? targetMap[targetChar]++ : targetMap[targetChar] = 1
    }
    for(let key in targetMap){
        if (key !== 'undefined') {
            min = Math.floor(Math.min(sMap[key]/targetMap[key], min))
        }
    }
    return min || 0
};