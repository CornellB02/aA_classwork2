/*******************************************************************************
Write a function arrayRange(min, max, step) that takes in 3 numbers as parameters
The function should return an array containing all numbers between `min` and `max`
at `step` intervals.

Examples:

arrayRange(0, 12, 2) => [ 0, 2, 4, 6, 8, 10, 12 ]
arrayRange(2, 5, 1) => [ 2, 3, 4, 5 ]
arrayRange(100, 20, 3) => []
*******************************************************************************/

function arrayRange(min, max, step) {
 let arr = []
 for (let i = min; i <= max; i += step){
  arr.push(i)
 }
 return arr
}


console.log(arrayRange(0, 12, 2))
console.log(arrayRange(2, 5, 1))
console.log(arrayRange(100, 20, 3))
console.log(arrayRange(37, 377, 3))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayRange;
