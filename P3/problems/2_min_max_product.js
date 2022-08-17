/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

// function minMaxProduct(array){
//   let min = array[0]
//   let max = array[0]
//   for (i = 0; i < array.length; i++){
//     let num = array[i];
//     if (num < min){
//       min = num;
//       } else if (max < num){
//         max = num
//     }

//   }

//   return max * min;
// }

// console.log(minMaxProduct([0, 1, -5, 3, 6])) // => -30
// console.log(minMaxProduct([6, 3, 7, 2])) // => 14

// Write a function that multiples(max, num) that takes in two numbers. The function
// should return an array of positive numbers less than `max` that are multiples of `num`.

// Examples:
function multiples(max, num) {
  newArr = []
  
  for (let i = 0; i < max; i++) {
    if (i % num === 0){
      newArr.push(i)

    }
  }
  return newArr
}

console.log(multiples(75, 5))// => [ 2, 4, 6, 8 ]
console.log(multiples(38, 3))// => [ 3, 6, 9, 12 ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = minMaxProduct;
