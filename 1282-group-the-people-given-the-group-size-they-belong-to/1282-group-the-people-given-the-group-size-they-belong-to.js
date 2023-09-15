/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let maxSize = Math.max(...groupSizes)
    let map = {}
    let resultArr = []
    for(let i = 0; i < groupSizes.length; i++){
        map[groupSizes[i]] ? map[groupSizes[i]].push(i) : map[groupSizes[i]] = [i]
    }
    for(let key in map){
        let groupSize = +key
        resultArr.push(helper(map[key],groupSize))
    }

    function helper(arr, newArrLength){
        let newArr = []
        while(arr.length > 0){
            newArr.push(arr.splice(0, newArrLength))
        }
        return newArr
    }

    return resultArr.flat()
};