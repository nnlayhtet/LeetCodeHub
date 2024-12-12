/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    

    for (let i = 0; i < k; i++){
        gifts.sort((a,b) => b - a)
        const maxPile = gifts[0]
        const remainingPile = Math.floor(Math.sqrt(maxPile))
        gifts[0] = remainingPile
    }
    
    return gifts.reduce((a,b) => a+b, 0)
    
    
    
    //return total of remaining gifts
    
};