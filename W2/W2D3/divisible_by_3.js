
/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.
Examples:
var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/
arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]) //=> [[1, 3]]


function divisibleByThreePairSum(array) {
    let arr = []
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            let sum = array[i] + array[j];
            if (sum % 3 === 0) {
                arr.push([i,j])
            }
        }
    }
    return arr
}

console.log(arr1)


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;