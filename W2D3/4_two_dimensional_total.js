/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/

let arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

// twoDimensionalTotal(arr1); // => 40

function twoDimensionalTotal(array) {
  sum = 0
  for (i = 0; i < array.length; i++){
    for (j = 1; j < array.length; j++){
      arr1 = array[i]
      arr2 = array[j]
      sum = (array[i] + array[j])
}
  }
  return sum
}


console.log(twoDimensionalTotal(arr1))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalTotal;
