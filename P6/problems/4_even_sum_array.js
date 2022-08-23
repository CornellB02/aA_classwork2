/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/
function evenSum(num) {
  let sum = 0 ;

  for(let i = 2; i <= num; i += 2){
    sum += i
  }
  return sum
}

function evenSumArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++){
  let num = array[i]
  newArray.push(evenSum(num))
    }
    return newArray
  }

console.log(evenSumArray([6, 7, 5]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
