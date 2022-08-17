/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
// counting all of the ele 
// init a count variable 
// set up a nested loop 
// 

 arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

function twoDimensionalSize(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    let innerArray = array[i]
    for (let j = 0; j < innerArray.length; j++) {
      count++
    }
  }
  return count
}

console.log(twoDimensionalSize(arr1))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = twoDimensionalSize;
