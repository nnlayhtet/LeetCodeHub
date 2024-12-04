/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch)
    if (index === -1) {
        return word
    }
    let firstPart = word.slice(0, index).split("").reverse().join("")
    let secondPart = word.slice(index + 1)
    return ch + firstPart + secondPart
    
};