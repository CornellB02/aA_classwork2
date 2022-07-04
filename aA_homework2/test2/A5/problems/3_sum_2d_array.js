/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/

function sum2DArray(array) {
  let sum = 0
  for (let i = array.length - 1; i >= 0; i--){
    let inArr = array[i]
    for (let j = 0; j < inArr.length; j++){
      let num = inArr[j]
      sum += num
    }
  }
  return sum
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
