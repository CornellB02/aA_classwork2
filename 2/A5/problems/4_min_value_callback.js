/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18
*******************************************************************************/

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
// minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18

function minValueCallback(array, cb) {
  if(!array.length){
    cb(null)
  }
  let lowest = array[0]
  for (let i = 0; i < array.length; i++){
    let num = array[i]
    if(num < lowest){
      lowest = num
    }
  }
  return cb(lowest)
}


console.log(minValueCallback(array1, Math.abs))
console.log(minValueCallback(array2, double))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minValueCallback;
