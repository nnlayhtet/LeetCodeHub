/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let i = 0;
    let j = 0;
    while(j < str2.length){
        let str2Code = str2.codePointAt(j)

        while(i < str1.length){
            let str1Code = str1.codePointAt(i)
            let nextStr1Code = (str1Code === 122 ? 97 : str1Code + 1)
            if (str2Code === str1Code || str2Code === nextStr1Code){
                i++
                j++
                break
            } else {
                i++
            }
        }
        if (i === str1.length) break
    }
    
    return j === str2.length
};