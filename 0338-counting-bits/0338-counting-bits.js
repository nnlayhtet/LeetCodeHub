/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = new Array(n+1)
    for(let i = 0; i < arr.length; i++){
        let binaryString = i.toString(2)
        let counter = 0
        for(let j = 0; j < binaryString.length; j++){
            if(binaryString[j] === "1") counter++
        }
        arr[i] = counter
    }
    return arr
};