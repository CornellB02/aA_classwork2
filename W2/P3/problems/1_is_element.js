/*******************************************************************************
Write a function isElement(array, ele) that takes an array and an element.
The function should return true if the element is found inside of the array, it
should return false otherwise.

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

isElement([1,2,3,4,5], 5) => true
isElement(["a", "b", "c"], "a") => true
isElement(["a", "b", "c"], "d") => false
*******************************************************************************/

// function isElement(array, ele){
//     for (let i = 0; i < array.length; i ++) {
//       arr = array[i]
//       if (arr === ele) {
//       return true 

//       }
//     }
//     return false
// }

// console.log(isElement([1,2,3,4,5], 5))
// console.log(isElement(["a", "b", "c"], "a")) // => true
// console.log(isElement(["a", "b", "c"], "d")) // => false


// Write a function valueReplace(array, object) that takes in an array and an object.
// The function should return a new array where each element of the original array
// is replaced with it's corresponding value from the object.

// function valueReplace(array, obj){
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     let ele = array[i]
//     if (obj[ele] === undefined){
//       newArr.push(ele)
//     } else {
//       newArr.push(obj[ele])
//     }
//   }
//   return newArr
// }


// Examples:

// console.log(valueReplace(['fun', 'one', 'bun', 'sun'], {fun: 1, one: 2, bun: 4}))
// => [ 1, 2, 'c', 4 ]

// valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
// => [ 'placements', 'operations', 'tommy' ]
// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = isElement;


