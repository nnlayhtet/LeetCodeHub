/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let pointer = digits.length - 1
    digits[pointer] += 1
    
    while (pointer !== 0){
        if (digits[pointer] >= 10) {
            digits[pointer] = 0
            digits[pointer - 1] += 1
        } else {
            break
        }
    pointer--
    }
    if (digits[0] === 10){
        digits[0] = 0
        digits.unshift(1)
    }
    return digits   
};