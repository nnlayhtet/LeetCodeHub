/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charsMap = {}
	let sum = 0
	chars.split("").map(char=>charsMap[char] ? charsMap[char]++ : charsMap[char] = 1)
	for(let letter of words){
		let letterMap = {}
		let validLetter = true
		letter.split("").map(char=>letterMap[char] ? letterMap[char]++ : letterMap[char] = 1)
		for(let key in letterMap){
			if(key in charsMap && letterMap[key] <= charsMap[key]) {
				continue
			} else {
				validLetter = false
			}
		}
		if (validLetter) sum += letter.length
	}
    return sum
};