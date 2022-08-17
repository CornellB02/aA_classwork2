/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

// function valueReplace(array, obj){
//   let arr = []

//   for (let i = 0; i < array.length; i++){
//     let ele = array[i];
//     if (obj[ele] === undefined){
//     arr.push(ele)
//       } else {
//     arr.push(obj[ele])
//       }
//     }
//     return arr
//   }

//     console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}))
//     console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}))


//     Write a function `minMaxProduct(array)` that return the product between the
// largest value and the smallest value in the array. Assume `array` is an array of
// numbers. Assume an array of at least two numbers.

// Examples:

// minMaxProduct([6, 3, 7, 2]) => 14
// minMaxProduct([0, 1, -5, 3, 6]) => -30


function minMaxProduct(array){
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++){
    let num = array[i]
    if (min > num){
      min = num;
    } else if (max < num){
        max = num;
      }
    }
    return max * min
  }

console.log(minMaxProduct([6, 3, 7, 2]))// => 14
console.log(minMaxProduct([0, 1, -5, 3, 6]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = valueReplace;
